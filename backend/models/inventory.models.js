const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = mongoose.Schema({
  widgetId: { type: Schema.Types.ObjectId, ref: 'Widget' },
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

module.exports = mongoose.model('Inventory', InventorySchema);