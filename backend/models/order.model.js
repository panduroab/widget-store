const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  items: {
    type: Array,
    default: []
  }, //you should test queries for subdocuments
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