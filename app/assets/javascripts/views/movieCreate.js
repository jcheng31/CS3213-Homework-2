Xuimovie.Views.MovieCreate = Xui.View.extend({
    template: JST["movieCreate"],

    initialize: function () {},

    render: function () {
        this.$el.html(this.template());
        this.delegateEvents();
        return this;
    },

    events: {
        "click #submit": "createMovie",
        "click #btn-cancel": "cancelCreate"
    },

    createMovie: function (e) {
        if (typeof (gon) == 'undefined') {
            alert('Please login first');
            return false;
        }

        // submit the form fields via POST method
        $(e.target).closest('form').ajaxSubmit({
            url: 'http://cs3213.herokuapp.com/movies.json',
            dataType: 'json',
            data: {
                access_token: gon.token
            },
            method: 'POST',
            error: function (e) {
                // error message
                console.log("ajax call to create movie failed");
            },
            success: function (e) {
                // TODO: add Backbone Route
                console.log("success");
            },
            beforeSubmit: function (e) {
                var movieName = $('#movie-name').val();
                var movieDescription = $('#movie-summary').val();

                var isMovieNameEmpty = movieName.trim() === "";
                var isMovieDescriptionEmpty = movieDescription.trim() === "";

                return !isMovieNameEmpty && !isMovieDescriptionEmpty;
            }
        });

        mainRouter.navigate('/', {
            trigger: true
        });
        this.destroy();
        return false;
    },

    cancelCreate: function (e) {
        e.preventDefault();
        mainRouter.navigate('/', {
            trigger: true
        });
        this.destroy();
    }
});