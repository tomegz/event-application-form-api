const mongoose = require('mongoose');
const Event = mongoose.model('Event');

exports.createEvent = async (req, res) => {
  const event = await (new Event(req.body)).save();
  const feedback = {
    messages: [
      { text: "Succesfully created event", type: "success"}
    ]
  };
  res.json(feedback);
};