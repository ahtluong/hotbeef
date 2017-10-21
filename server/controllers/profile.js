var {mongoose} = require('../db/mongoose');
var {IngredientMap} = require('../models/ingredient_map');
var Router = require('express').Router;
var app = new Router();
module.exports.ProfileController = app;


app.get('/inventory/:ingredient', (req, res) => {
  let ingredient = req.params.ingredient;
  console.log(ingredient);

  IngredientMap.find({'name' : ingredient}).then((inventory) => {
    res.send({inventory});
  }, (e) => {
    res.status(400).send(e);
  });
});


app.post('/inventory', (req, res) => {
  console.log(req.body);

  let ingredient = new IngredientMap(req.body);
  console.log(ingredient);

  ingredient.save().then((doc) => {
    res.send(doc);
    console.log(doc.body);
  }, (e) => {
    res.status(400).send(e);
  });
});