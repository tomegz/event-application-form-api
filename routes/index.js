const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { catchErrors } = require("../handlers/errorHandlers");

router.post('/events', catchErrors(eventController.createEvent));

module.exports = router;