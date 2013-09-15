Xuimovie.Views.MovieDetail = Backbone.View.extend({
    template: JST["movieDetail"],
    initialize: function() {
        this.render();
    },
    events: {
        'click #back-list-btn': 'back',
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
            wait: true,
            success: function() {
                mainRouter.navigate('/', {trigger: true});
            }
        });
    }
});
