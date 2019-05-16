// TeamRoute.js

const express = require("express");
const app = express();
const TeamRoute = express.Router();

// Require Post model in our routes module
let Team = require("../model/Team");

// Defined store route
TeamRoute.route("/add").post(function(req, res) {
  let team = new Team(req.body);
  team
    .save()
    .then(team => {
      console.log("TeamSaved", team);
      res.status(200).json(team);
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
TeamRoute.route("/").get(function(req, res) {
  Team.find(function(err, posts) {
    if (err) {
      console.log(err);
    } else {
      res.json(posts);
    }
  });
});

// Defined get one data(_id) route
TeamRoute.route("/get/:id").get(function(req, res) {
  Team.findOne({ _id: req.params.id }, function(err, team) {
    if (err) {
      console.log(err);
    } else {
      res.json(team);
    }
  });
});

// Defined update data route
TeamRoute.route("/update/:id").post(function(req, res) {
  console.log("BodyUpdate", req.body);
  Team.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, team) => {
      if (err) return res.status(500).send(err);
      return res.send(team);
    }
  );
});

// Defined delete | remove | destroy route
TeamRoute.route("/delete/:id").get(function(req, res) {
  Team.findByIdAndRemove({ _id: req.params.id }, function(err, post) {
    if (err) res.json(err);
    else res.json(req.params.id);
  });
});

module.exports = TeamRoute;
