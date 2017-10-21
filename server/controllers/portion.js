var {mongoose} = require('../db/mongoose');
var {IngredientMap} = require('../models/ingredient_map');
var Router = require('express').Router;
var app = new Router();
module.exports.ProfileController = app;

app.get('/:username', (req, res) => {
    let username = req.params.username;

    Profile.find({username : username}).then((profile) => {
        res.send(profile.portion);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.post('/portion', (req, res) => {
    var profile = Profile.find({username : req.headers.usernameHeader});
    profile.portion = req.body.portion;
    profile.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
  });