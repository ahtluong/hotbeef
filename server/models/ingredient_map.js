var mongoose = require('mongoose');
var IngredientMapSchema = require('./schema').IngredientMapSchema;
var IngredientMap = mongoose.model('IngredientMap', IngredientMapSchema);
module.exports = {IngredientMap};