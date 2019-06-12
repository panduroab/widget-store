const mongoose = require('mongoose');
const itemModel = require('./item.model');

const InventorySchema = mongoose.Schema({
  item: itemModel,
  count: {
    type: Number,
    min: 0,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = connection => connection.model('Inventory', InventorySchema);