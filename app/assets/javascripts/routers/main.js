Xuimovie.Routers.Main = Backbone.Router.extend({
    routes: {
        ""                  : "mainPage",
        "#loggedout"        : "redirectToMain",
        "movies/:id"        : "getMovie",
        "movies/:id/#edit"  : "editMovie",
        "new_movie"         : "createMovie",
        ":moviePage"        : "mainPage"
    },
    editMovie: function(movieId) {
        // TODO: if have time, cleaner to use event based method i.e. router just
        // TODO: publish event and let model handle the update

        var movie = new Xuimovie.Models.Movie({id: movieId});
        movie.fetch({
            success: function() {
                var movieEditView = new Xuimovie.Views.MovieEdit({
                    model: movie,
                    el: $('#application-content')
                });

                movieEditView.render();
            }
        });

    },
    mainPage: function(moviePage) {
        var moviePageSourceUrl = '//cs3213.herokuapp.com/movies.json?page=';

        if (!moviePage) {
            moviePage = 1;
            $('#prev').removeClass("enabled");
            $('#prev').addClass("disabled");
        } else {
            // We need to cast the parameter to a number, since it may be a string.
            moviePage = parseInt(moviePage, 10);
        }

        // Check if there's a page after this one.
        var nextCollection = $.get(moviePageSourceUrl + (moviePage + 1), function(data) {
            if (data.length) {
                // There is.
                $('#next').removeClass("disabled");
                $('#next').addClass("enabled");
            }

            // Check if we need to enable the previous link.
            if (moviePage > 1) {
                $('#prev').removeClass("disabled");
                $('#prev').addClass("enabled");
            }
        });

        var movieCollection = new Xuimovie.Collections.Movies([], {
            url: moviePageSourceUrl + moviePage
        });

        mainView = new Xuimovie.Views.Movies({
            el: document.getElementById("application-content"),
            collection: movieCollection
        });
        movieCollection.fetch();
    },

    redirectToMain: function() {
        this.navigate("/", {
            trigger: true
        });
    },

    getMovie: function(id) {
        var movie = new Xuimovie.Models.Movie();
        movie.id = id;
        movie.fetch({
            success: function() {
                movieDetailView = new Xuimovie.Views.MovieDetail({
                    el: document.getElementById("application-content"),
                    model: movie
                });
                // movieDetailView.render();

                var url = "//cs3213.herokuapp.com/movies/" + id + "/reviews.json";
                var reviewCollection = new Xuimovie.Collections.Reviews([], {
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