var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var AuthController = require('./controllers/auth').AuthController;
var UserController = require('./controllers/user').UserController;
var app = express();

app.use(bodyParser.json());
app.use('/api/auth', AuthController);
app.use('/api/user', UserController);

app.listen(3000, () => {
	console.log("Started on port 3000");
});

module.exports = app;