Xuimovie.Views.MovieDetail = Backbone.View.extend({
    template: JST["movieDetail"],
    initialize: function() {
        this.render();
    },
    events: {
        'click #back-list-btn': 'back'
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
    }
});
