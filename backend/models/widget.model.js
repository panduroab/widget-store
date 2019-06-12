const mongoose = require('mongoose');

const WidgetSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  category: {
    type: String,
    enum: [
      'Prime',
      'Elite',
      'Extreme Edition'
    ]
  },
  isAvailable: {
    type: Boolean,
    default: true
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

module.exports = mongoose.model('Widget', WidgetSchema);