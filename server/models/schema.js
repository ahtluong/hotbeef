var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
  name: String,
  acquired: Boolean
});

var DishSchema = new Schema({
  dish_name: String,
  ingredients: [IngredientSchema],
});

var UserSchema = new Schema({
  username: String,
  password: String,
  icon_url: String,
  bio: String,
	starter_ingredient: String,
  portion: Number,
  inventory: [DishSchema],
	location: { 
			lat: Number, 
			long: Number
	},
	swipes: [{ingredient: String, other_user: String}] 
});



// var ProfileSchema = new Schema({
// 	name: String,
// 	password: String,
// 	icon_url: String,
// 	bio: String,
// 	starter_ingredient: String,
//   portion: Number,
//   inventory: [DishSchema],
// 	location: { 
// 			lat: Number, 
// 			long: Number
// 	},
// 	swipes: [{ingredient: String, id: Number}]
// });

var IngredientMapSchema = new Schema({
  name: String,
  icon_url: String,
  dishes: [DishSchema]
});

module.exports = {
  UserSchema: UserSchema,
  // ProfileSchema: ProfileSchema,
  IngredientMapSchema: IngredientMapSchema
}