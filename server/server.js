var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var AuthController = require('./controllers/auth').AuthController;
var ProfileController = require('./controllers/profile').ProfileController;
var app = express();

app.use(bodyParser.json());
app.use('/api/auth', AuthController);
app.use('/api/profile', ProfileController);

app.listen(3000, () => {
	console.log("Started on port 3000");
});

module.exports = app;