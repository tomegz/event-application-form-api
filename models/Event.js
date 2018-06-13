const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: 'Please provide first name'
  },
  lastName: {
    type: String,
    trim: true,
    required: 'Please provide last name'
  },
  email: {
    type: String,
    trim: true,
    required: 'Please provide email address'
  },
  eventDate: {
    type: Date,
    required: 'Please provide event\'s date'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Event', eventSchema);