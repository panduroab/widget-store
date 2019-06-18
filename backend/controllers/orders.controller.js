const OrderModel = require('../models/order.model');
const widgetController = require('./widgets.controller')();
const asyncHandler = require('express-async-handler');

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
  findById: findOrderById
});