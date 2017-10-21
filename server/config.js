require('dotenv').config({path : __dirname + '/.env'});

var config = {
	database: '',
	secret: 'abcdefghijklmnopqrstuvwxyz'
};
module.exports = config;