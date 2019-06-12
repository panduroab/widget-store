const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = mongoose.Schema({
  colorName: {
    type: String,
    required: true
  },
  colorCode: {
    type: String,
    required: true
  },
  mesure: {
    type: String,
    enum: ['px', 'em', 'rem'],
    required: true
  },
  width: {
    type: Number,
    min: 0,
    required: true
  },
  length: {
    type: Number,
    min: 0,
    required: true
  },
  widgetId: { type: Schema.Types.ObjectId, ref: 'Widget' },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = connection => connection.model('Item', ItemSchema);