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
  widgetId: {
    type: Schema.Types.ObjectId,
    ref: 'Widget',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const OrderSchema = mongoose.Schema({
  items: [ItemSchema], //you should test queries for subdocuments
  //https://coderwall.com/p/6v5rcw/querying-sub-documents-and-sub-sub-documents-in-mongoose
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', OrderSchema);