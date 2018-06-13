const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

// connect with db
mongoose.connect(process.env.DATABASE);
const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`Error occured, ${err.message}`);
});
db.once('open', () => {
  console.log(`Connected to MongoDB`);
})

// require models
require('./models/Event');

// start the app
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running, PORT ${server.address().port}`);
});