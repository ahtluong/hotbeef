var mongoose = require('mongoose');
var ProfileSchema = require('./schema').ProfileSchema;
var Profile = mongoose.model('Profile', ProfileSchema);
module.exports = {Profile};