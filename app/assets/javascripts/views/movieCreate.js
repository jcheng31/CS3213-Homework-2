Xuimovie.Views.MovieCreate = Xui.View.extend({
    template: JST["movieCreate"],

    initialize: function() {
    },

    render: function() {
        this.$el.html(this.template());
        $('#new-movie-form').ajaxForm({
            beforeSubmit: this.validateForm
        });
        this.delegateEvents();
        return this;
    },

    events:{
        "click #submit": "createMovie",
        "click #btn-cancel": "cancelCreate"
    },

    validateForm: function() {
        var movieName = $('#movie-name').val();
        var movieDescription = $('#movie-summary').val();

        var isMovieNameEmpty = movieName.trim() === "";
        var isMovieDescriptionEmpty = movieDescription.trim() === "";

        return !isMovieNameEmpty && !isMovieDescriptionEmpty;
    },

    createMovie: function(e) {
        if (typeof(gon) == 'undefined') {
            alert('Please login first');
            return false;
        }

        // submit the form fields via POST method
        $(e.target).closest('form').ajaxSubmit( {
            url: 'http://cs3213.herokuapp.com/movies.json',
            dataType: 'json',
            data: {
                access_token : gon.token
            },
            method: 'POST',
            error: function(e) {
                // error message
                console.log("ajax call to create movie failed");
            },
            success: function(e) {
                // TODO: add Backbone Route
                console.log("success");
            },
            beforeSubmit: function(e) {
                // TODO: add validation for the required field (if not done automatically)
            }
        });

        mainRouter.navigate('/', { trigger: true });
        return false;
    },

    cancelCreate: function(e) {
        e.preventDefault();
        mainRouter.navigate('/', { trigger: true });
    }
});