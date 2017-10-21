const express = require('express');
const app     = express();
const config = require('./config')

// Set up database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.database, {
	useMongoClient: true
})
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));

// Set up route for api
const api = require('./routes/api');
app.use('/api/');

module.exports = app;