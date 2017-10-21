const express = require('express');
const app     = express();
const config  = require('./config')

// Set up database
const mongoose   = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.database, {
	useMongoClient: true
})
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));

// Set up route for api
const authentication = require('./controllers/authentication');
const user           = require('./controllers/user');
const view           = require('../dist/index.html');

app.use('/api/authentication', authentication);
app.use('/api/user'          , authentication);
app.use('*', view);

module.exports = app;