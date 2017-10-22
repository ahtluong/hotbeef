var {mongoose} = require('../db/mongoose');
var {IngredientMap} = require('../models/ingredient_map');
var {User} = require('../models/user')
var Router = require('express').Router;
var app = new Router();

app.get('/inventory/:ingredient', (req, res) => {
  let ingredient = req.params.ingredient;

  IngredientMap.find({'name' : ingredient}).then((inventory) => {
    res.send({inventory});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.put('/select_ingredient', (req, res) => {
  let ingredient = req.body.ingredient;
  let username = req.body.username;
  
  User.update({'username': username}, {$set: {starter_ingredient: ingredient}}).then((count, status) => {
    IngredientMap.find({name: ingredient}).then((ingredient_map) => {
      User.update({'username': username}, {$set: {icon_url: ingredient_map.icon_url}}).then((count, status) => {}, (err) => {})
    }, (err) => {
      res.status(400).send(err);
    });
  });
});

app.get('/all_ingredient_list', (req, res) => {
  IngredientMap.find().then((ingredient_list) => {
    res.send(ingredient_list);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.put('/bio', (req, res) => {
  let bio = req.body.bio;
  // TODO: let username = req.
  User.update({'username': username}, {$set: {bio: bio}}).then((count, status) => {}, (e) => {});
});

app.post('/inventory', (req, res) => {
  let ingredient = new IngredientMap(req.body);

  ingredient.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

// TODO: IN PROGRESS
app.post('/rightswipe', (req, res) => {
  let user = req.body.user; 
  let user_swipes = user.swipes;
  let username = user.username;
  let other_user = req.body.other_user;
  let other_user_swipes = other_user.swipes
  let i = other_user.length - 1;

  while (i >= 0) {
    if (username == other_user[i].other_user) {
      otherUserSwipes.splice(i, 1);
    }
    i--;
  }
});

module.exports.UserController = app;
