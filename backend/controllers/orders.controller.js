const OrderModel = require('../models/order.model');
const asyncHandler = require('express-async-handler');

const createOrder = asyncHandler(async (req, res) => {
  const { body } = req;
  const data = await OrderModel.create(body);
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