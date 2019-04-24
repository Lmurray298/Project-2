var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Movie.findAll({}).then(function (dbMovie) {
      res.render("index", {
        msg: "Welcome!",
        movie: dbMovie
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/movie/:id", function (req, res) {
    db.Movie.findOne({ where: { id: req.params.id } }).then(function (dbMovie) {
      res.render("movie", {
        movie: dbMovie
      });
    });
  });

  // Get to the movie page
  app.get("/movie", function (req, res) {
    db.Movie.findAll().then(function (dbMovie) {
      console.log(dbMovie[0])
      res.render("movie", {
        movie: dbMovie
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};