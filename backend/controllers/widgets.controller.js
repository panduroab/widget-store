const WidgetModel = require('../models/widget.model');
const asyncHandler = require('express-async-handler');

const createWidget = asyncHandler(async (req, res) => {
  const { body } = req;
  const data = await WidgetModel.create(body);
  res.json(data);
});

const findWidgets = asyncHandler(async (req, res) => {
  const data = await WidgetModel.find();
  res.json(data);
});

const findWidgetById = asyncHandler(async (req, res) => {
  const { widget_id } = req.params;
  const data = await WidgetModel.findById(widget_id);
  res.json(data);

});
module.exports = () => ({
  create: createWidget,
  find: findWidgets,
  findById: findWidgetById
});