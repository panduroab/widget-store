const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WidgetSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  category: {
    type: String,
    enum: ['Prime', 'Elite', 'Extreme Edition'],
    required: true
  },
  color: {
    type: String,
    enum: [
      'White',
      'Silver',
      'Gray',
      'Black',
      'Red',
      'Maroon',
      'Yellow',
      'Olive',
      'Lime',
      'Green',
      'Aqua',
      'Teal',
      'Blue',
      'Navy',
      'Fuchsia',
      'Purple'
    ],
    required: true,
  },
  size: {
    type: String,
    enum: ['Small', 'Medium', 'Big'],
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  stock: {
    type: Number,
    min: 0,
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

module.exports = mongoose.model('Widget', WidgetSchema);