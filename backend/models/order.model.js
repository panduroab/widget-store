const mongoose = require('mongoose');

module.exports = connection => {
  const itemModel = require('./item.model')(connection);
  const OrderSchema = mongoose.Schema({
    items: [itemModel], //you should test queries for subdocuments
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
  return connection.model('Order', OrderSchema)
};