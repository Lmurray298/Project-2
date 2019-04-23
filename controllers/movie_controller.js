let express = require('express');
let router = express.Router();
let request = require('request');
let db = require('../models');
​
​
router.get('/', function(req, res) {
  db.Movie.findAll({
    order: [['movie_name', 'ASC']]
​
  }).then(function(data) {
    let hbsObject = {
      movies: data
    };
    res.render('index', hbsObject);
  });
});
​
router.get('/year', function(req, res) {
  db.Movie.findAll({
    order: [['movie_year', 'ASC']]
​
  }).then(function(data) {
    let hbsObject = {
      movies: data
    };
    res.render('index', hbsObject);
  });
});
​
router.post('/api/new/movie', function(req, res) {
​
    let movieName = req.body.name;
​
    let queryUrl = "http://omdbapi.com/?apikey=9ced732d&t=" + movieName;
​
  request(queryUrl, function(error, response, body) {
​
​
    if (!error && JSON.parse(body).Response !== "false") {
      console.log(JSON.parse(body));
​
      let imdbId = JSON.parse(body).imdbID;
​
      console.log(imdbId);
​
      let options = {
        method: 'GET',
        url: "https://api.themoviedb.org/3/movie/" + imdbId,
        qs: {
          language: "en-US",
          api_key: "d9da5399c0e725be02ebdeb3eb4455b1"
        },
        body: "{}"
      };
​
      request(options, function(error, response, result) {
​
        if (error) res.redirect('/');
​
          if (!JSON.parse(result).results) {
        
          res.redirect('/')
        } else{
          videos = JSON.parse(result).results[0].key;
          db.Movie.create({
            movie_name: JSON.parse(body).Title,
            movie_poster: JSON.parse(body).Poster,
            movie_year: JSON.parse(body).Year,
            
​
          }).then(function() {
            res.redirect('/');
          });
​
        }
      });
​
    } else {
      console.log("\n...something is wrong");
      res.redirect('/');
    }
  });
});
​
module.exports = router;

