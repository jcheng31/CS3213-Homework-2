Xuimovie.Routers.Main = Backbone.Router.extend({
  routes: {
    "" : "mainPage",
    "loggedout" : "redirectToMain",
    "movies/:id" : "getMovie",
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
        movieView = new Xuimovie.Views.Movie({
          el: document.getElementById("application-content"),
          model:movie
        });
        movieView.render();
      }
    });
  }
});
