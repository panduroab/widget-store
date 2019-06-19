const OrderModel = require('../models/order.model');
const widgetController = require('./widgets.controller')();
const asyncHandler = require('express-async-handler');
const groupBy = require('lodash/groupBy');
const Promise = require("bluebird");


const checkoutOrder = asyncHandler(async (req, res, next) => {
  const { body: { items } } = req;
  const widgetsGrouped = groupBy(items, item => item._id);
  //Validate each item
  const mapResult = await Promise.map(Object.keys(widgetsGrouped), async _id => {
    const amount = widgetsGrouped[_id].length;
    const isValid = await widgetController.validateWidgetStock(_id, amount);
    //if there is not enough widgets in stock return error
    if (!isValid) {
      return next(new Error("Can't complete the order"));
    }
    return isValid;
  });
  return next();
});

const createOrder = asyncHandler(async (req, res, next) => {
  const { body } = req;
  const data = await OrderModel.create(body);
  const updatedWidgets = await widgetController.updateWidgetsStock(data);
  res.json(data);
});

const findOrders = asyncHandler(async (req, res) => {
  const data = await OrderModel.find();
  res.json(data);
});

const findOrderById = asyncHandler(async (req, res) => {
  const { order_id } = req.params;
  const data = await OrderModel.findById(order_id);
  res.json(data);

});
module.exports = () => ({
  create: createOrder,
  find: findOrders,
  findById: findOrderById,
  checkoutOrder: checkoutOrder
});