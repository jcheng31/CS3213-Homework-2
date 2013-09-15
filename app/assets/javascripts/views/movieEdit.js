Xuimovie.Views.MovieEdit = Backbone.View.extend({
    template: JST["movieEdit"],

    initialize: function() {
    },

    render: function() {
        console.log(this.model.toJSON());


        $(document.body).find('#application-content').html(this.template(this.model.toJSON()));
        this.delegateEvents();
        return this;
    },

    events: {
        "click #btn-edit": "editMovie",
        "click #btn-cancel": "cancelCreate"
    },

    editMovie: function(e) {
        e.preventDefault();

        if (typeof(gon) == 'undefined') {
            alert('Please login first');
            return false;
        }



        var movieId = this.model.get('id');
        var movie = new Xuimovie.Models.Movie({
            id: movieId,
            title: $('#movie-name').val(),
            summary: $('#movie-summary').val(),
            access_token: gon.token
        });


        window.global = movie;


//        var updatedMovie = new Xuimovie.Models.Movie({
//            id: movie.get('id'),
//            title: movie.get('title'),
//            summary: movie.get('summary'),
//            access_token: gon.token
//        });

        movie.save({
            success: function() {

            },
            error : function(a, b, c) {
                console.log(a);
                console.log(b);
                console.log(c);
            }
        });

        // success is not triggerred, cause 204 maybe use that as the condition to navigate instead
        var navigateUrl = '/movies/{0}'.format(movieId);
        mainRouter.navigate(navigateUrl, { trigger: true });

        // submit the form fields via POST method
//        $(e.target).closest('form').ajaxSubmit( {
//            url: 'http://cs3213.herokuapp.com/movies/{0}.json'.format(movieId),
//            dataType: 'json',
//            data: {
//                access_token : gon.token
//            },
//            method: 'PUT',
//            error: function(e) {
//                // error message
//                console.log("ajax call to create movie failed");
//            },
//            success: function(e) {
//                // TODO: add Backbone Route
//                console.log("success");
//            },
//            beforeSubmit: function(e) {
//                // TODO: add validation for the required field (if not done automatically)
//            }
//        });

        // mainRouter.navigate('/', { trigger: true });
    },

    cancelCreate: function(e) {
        e.preventDefault();
        mainRouter.navigate('/', { trigger: true });
    }
});