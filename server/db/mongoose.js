var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user:user@ds227555.mlab.com:27555/hotbeef', { useMongoClient: true }).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));;

/*
mongoose.connect(config.database, {
	useMongoClient: true
})
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));
*/

module.exports = {mongoose};

