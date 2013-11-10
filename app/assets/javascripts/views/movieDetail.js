Xuimovie.Views.MovieDetail = Xui.View.extend({
    template: JST["movieDetail"],
    initialize: function() {
        this.render();
    },
    events: {
        'click #back-list-btn': 'back',
        'click #btn-movie-edit': 'editMovie',
        'click #btn-movie-delete': 'destroyMovie'
    },
    render: function() {
        var renderedHtml = this.template(this.model.attributes);
        this.$el.html(renderedHtml);
        this.delegateEvents();
        return this;
    },
    back: function(e) {
        e.preventDefault();
        mainRouter.navigate('/', { trigger: true });
        this.destroy();
    },
    editMovie: function(e) {
        e.preventDefault();
        var movieId = this.model.get('id');
        var navigateUrl = '/movies/{0}/edit'.format(movieId);
        mainRouter.navigate(navigateUrl , { trigger: true });
        this.destroy();
    },
    destroyMovie: function(e) {
        e.preventDefault();

        if (typeof(gon) == 'undefined') {
            alert('Please login first');
            return false;
        }

        if (!confirm('Are you sure you want to delete this movie?')) {
            return false;
        }

        var movie = this.model;
        movie.destroy({
            data: {
                access_token: gon.token
            },
            processData: true,
            // delete from the DOM only when the server has confirmed
            wait: true,
            success: function() {
                mainRouter.navigate('/', {trigger: true});
                this.destroy();
            },
            error: function(model, xhr, options) {
                alert("Sorry we cannot delete this movie: " + xhr);
            }
        });
    }
});
