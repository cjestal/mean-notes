var mongoose = require('mongoose');

module.exports = mongoose.model('Notes', {
  title: String,
  text: String,
  created: { type: Date, default: Date.now }
});