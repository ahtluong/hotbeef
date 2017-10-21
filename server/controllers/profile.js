var {mongoose} = require('../db/mongoose');
var {IngredientMap} = require('../models/ingredient_map');
var Router = require('express').Router;
var app = new Router();
module.exports.ProfileController = app;


app.get('/inventory/:ingredient', (req, res) => {
  let ingredient = req.params.ingredient;

  IngredientMap.find({ingredient : {$exists: true}}).then((inventory) => {
    res.send({inventory});
  }, (e) => {
    res.status(400).send(e);
  });
});


app.post('/inventory', (req, res) => {
  var ingredient_map = new IngredientMap({
    "bread": {"icon_url": "www.google.com", "dishes": 
        [{"dish_name": "grilled cheese", "ingredients": [{"name": "cheese", "acquired": 0}]}]},
    "beef": {"icon_url": "www.hotmail.com", "dishes": 
        [{"dish_name": "spaghetti", "ingredients": [{"name": "pasta", "acquired": 0}]}]},
    "pasta": {"icon_url": "www.gmail.com", "dishes": 
        [{"dish_name": "alfredo", "ingredients": [{"name": "cheese", "acquired": 0}]}]},
    "cheese": {"icon_url": "www.cnn.com", "dishes": 
        [{"dish_name": "grilled cheese", "ingredients": [{"name": "bread", "acquired": 0}]}]}
  });

  ingredient_map.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});