Xuimovie.Routers.Main = Backbone.Router.extend({
  routes: {
    "" : "mainPage",
    "loggedout" : "redirectToMain",
    "movies/:id" : "getMovie",
    "new_movie" : "createMovie"
  },

  mainPage: function() {
    var movieCollection = new Xuimovie.Collections.Movies();
    mainView = new Xuimovie.Views.Movies({
      el: document.getElementById("application-content"),
      collection: movieCollection
    });
    movieCollection.fetch();
  },

  redirectToMain: function() {
    this.navigate("/", {trigger: true});
  },

  getMovie: function(id){
    var movie = new Xuimovie.Models.Movie();
    movie.id = id + ".json";
    movie.urlRoot = 'http://cs3213.herokuapp.com/movies';
    movie.fetch({
      success: function(){
        movieDetailView = new Xuimovie.Views.MovieDetail({
          el: document.getElementById("application-content"),
          model:movie
        });
        // movieDetailView.render();
        
        var url = "http://cs3213.herokuapp.com/movies/"+ id + "/reviews.json";
        var reviewCollection = new Xuimovie.Collections.Reviews([],{
          url: url,
          movie_id: id
        });
        reviewsView = new Xuimovie.Views.Reviews({
          el: document.getElementById("reviews-container"),
          collection: reviewCollection
        });
        reviewCollection.fetch();
      }
    });    
  },

  createMovie: function() {
    var createMovieView = new Xuimovie.Views.MovieCreate({
      el: document.getElementById("application-content")
    });
    createMovieView.render();
  }
});
