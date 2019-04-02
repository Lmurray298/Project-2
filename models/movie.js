$(document).on('click', "#searchButton", function () {
    event.preventDefault();
    var title = $('#searchInput').val().trim();
});

    console.log(title);
    var queryURL = 'http://www.omdbapi.com/?t=' + title + '&apikey=9ced732d';

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        var settings = {
          'cache': false,
          'dataType': "jsonp",
          "async": true,
          "crossDomain": true,
          "url": queryURL,
          "method": "GET",
          "headers": {
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
        
        $.ajax(settings).done(function (response) {
          console.log(response);
          var movie = response.movie[0];
          

          var Title = response.Title;
          var Cover = response.Poster;
          var Genre = response.Genre;
          var Plot = response.Plot;
          var Starring = response.Actors;
                    
          //-------$("#movie").html(Title + '<br>' + Cover + '<br>' + Genre + '<br>' + Plot + '<br>' + Starring);
          
        });
    });

  