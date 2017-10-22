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
  let username = req.headers.username;
  
  User.update({'username': username}, {$set: {starter_ingredient: ingredient}}).then((count, status) => {
    IngredientMap.find({name: ingredient}).then((ingredient_map) => {
      User.update({'username': username}, {$set: {icon_url: ingredient_map.icon_url}}).then((count, status) => {}, (err) => {})
    }, (err) => {
      res.status(400).send(e);
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
  let username = req.headers.username;
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

app.post('/rightswipe', (req, res) => {
  let user = req.body.user; 
  let user_swipes = user.swipes;
  let username = user.username;
  let user_ingredient = user.starter_ingredient;

  let other_user = req.body.other_user;
  let other_user_swipes = other_user.swipes;
  let other_user_name = other_user.username;
  let other_user_ingredient = other_user.starter_ingredient;

  let j = user_swipes.length - 1;
  let i = other_user_swipes.length - 1;

  while (i >= 0) {
    // If I'm in their swipes...
    if (username == other_user_swipes[i].other_user) {
      // Remove me from their swipes
      other_user_swipes.splice(i, 1);
      while (j >= 0) {
        if (other_user_name == user_swipes[j].other_user) {
          // Remove them from my swipes
          user_swipes.splice(j, 1);
        }
        j--;
      }

      // Update my ingredients list
      let dishes = user.inventory;
      dishes.forEach(function(dish) {
        dish.ingredients.forEach(function(ingredient) {
          if (ingredient == other_user_ingredient) {
            ingredient = true;
          }
        })
      });

      // Update their ingredients list
      dishes = other_user.inventory;
      dishes.forEach(function(dish) {
        dish.ingredients.forEach(function(ingredient) {
          if (ingredient == user_ingredient) {
            ingredient = true;
          }
        })
      });
      break;
    } 
    i--;
  }

  res.status(200);
});


module.exports.UserController = app;
