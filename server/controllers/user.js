var {mongoose} = require('../db/mongoose');
var {IngredientMap} = require('../models/ingredient_map');
var {User} = require('../models/user')
var Router = require('express').Router;
var app = new Router();


app.get('/portion', (req, res) => {
  User.find({username : req.headers.username}).then((user) => {
    res.send({portion: user[0].portion});
  }, (e) => {
    res.status(400).send(e);
  });
});


app.post('/portion', (req, res) => {
  User.find({username : req.headers.username}).then((user) => {
    user.portion = req.body.portion;
    User.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
  });
});


app.get('/inventory/:ingredient', (req, res) => {
  let ingredient = req.params.ingredient;

  IngredientMap.find({'name' : ingredient}).then((inventory) => {
    res.send({inventory});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/inventory', (req, res) => {
  User.find({username : req.headers.username}).then((user) => {
    inventory = user[0].inventory;
    res.send(inventory);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.post('/inventory', (req, res) => {
  let ingredient = new IngredientMap(req.body);

  ingredient.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});


app.put('/bio', (req, res) => {
  let bio = req.body.bio;
  let username = req.headers.username;
  User.update({'username': username}, {$set: {bio: bio}}).then((count, status) => {}, (e) => {});
});


app.put('/select_ingredient', (req, res) => {
  IngredientMap.find({name: req.body.ingredient}).then((ingredient) => {
    User.update({username: req.body.username}, {$set: {starter_ingredient: ingredient, icon_url: ingredient.icon_url}}).then((count, status) => {}, (err) => {});
  }, (err) => {
    res.status(400).send(err);
  });
});

app.put('/ingredient', (req, res) => {
  let ingredient = req.body.ingredient;
  let username = req.headers.username;
  
  User.update({username: username}, {$set: {starter_ingredient: ingredient}}).then((count, status) => {
    IngredientMap.find({name: ingredient}).then((ingredient_map) => {
      User.update({username: username}, {$set: {icon_url: ingredient_map.icon_url}}).then((count, status) => {}, (err) => {});
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
 

// TODO: Actually use location data
app.get('/nearby', (req, res) => {
  User.find().then((users) => {
    res.send(users);
  }, (e) => {
    res.status(400).send(e);
  });
});


app.post('/right_swipe', (req, res) => {
  let user1 = req.body.user1; 
  let user1_swipe_history = user1.swipes;
  let user1_name = user1.username;
  let user1_ingredient = user.starter_ingredient;

  let user2 = req.body.user2;
  let user2_swipe_history = user2.swipes;
  let user2_name = user2.username;
  let user2_ingredient = user2.starter_ingredient;

  let j = user1_swipe_history.length - 1;
  let i = user2_swipe_history.length - 1;

  // Remove users from each other's swipe history and update ingredients list for both
  while (i >= 0) {
    if (username == user2_swipe_history[i].other_user) {
      user2_swipe_history.splice(i, 1);
      while (j >= 0) {
        if (user2_name == user1_swipe_history[j].other_user) {
          user1_swipe_history.splice(j, 1);
        }
        j--;
      }

      let dishes = user1.inventory;
      dishes.forEach(function(dish) {
        dish.ingredients.forEach(function(ingredient) {
          if (ingredient == user2_ingredient) {
            ingredient = true;
          }
        })
      });

      dishes = user2.inventory;
      dishes.forEach(function(dish) {
        dish.ingredients.forEach(function(ingredient) {
          if (ingredient == user1_ingredient) {
            ingredient = true;
          }
        })
      });

      User.update({username: user1}, user1).then((count) => {
        User.update({username: user2}, user2).then((count) => {}, (e) => {});
      }, (e) => {});

      break;
    } 
    i--;
  }

  res.status(200);
});


module.exports.UserController = app;
