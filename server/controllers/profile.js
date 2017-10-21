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
  console.log(req)
  let ingredient = new IngredientMap(req.body);

  ingredient.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});