var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  password: String
});

var IngredientSchema = new Schema({
  name: String,
  acquired: Boolean
});

var DishSchema = new Schema({
  dish_name: String,
  ingredients: [IngredientSchema],
});

var ProfileSchema = new Schema({
	name: String,
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
	swipes: {
		tomato: [Number],
		potato: [Number],
		almond: [Number]
	},
});

var IngredientMapSchema = new Schema({
  name: String,
  icon_url: String,
  dishes: [DishSchema]
});

module.exports = {
  UserSchema: UserSchema,
  ProfileSchema: ProfileSchema,
  IngredientMapSchema: IngredientMapSchema
}