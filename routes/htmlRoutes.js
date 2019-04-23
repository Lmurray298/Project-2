var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Movie.findAll({}).then(function(Movie) {
      res.render("index", {
        msg: "Welcome!",
        examples: Movie
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Movie.findOne({ where: { id: req.params.id } }).then(function(Movie) {
      res.render("Movie", {
        example: Movie
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};