const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config({ path: 'variables.env' });
mongoose.connect(process.env.DATABASE);
const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`Error occured, ${err.message}`);
});
db.once('open', () => {
  console.log(`Connected to MongoDB`);
})

const app = express();
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running, PORT ${server.address().port}`);
});