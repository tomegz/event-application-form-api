const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

router.post('/events/add', eventController.createEvent);

module.exports = router;