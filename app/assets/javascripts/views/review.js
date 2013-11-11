Xuimovie.Views.Review = Xui.View.extend({
    template: JST["review"],
    url:'//cs3213.herokuapp.com/movies/',
    initialize: function() {
        this.render();
    },
    render: function() {
        var renderedHtml = this.template(this.model.attributes);
        this.$el.html(renderedHtml);
        this.delegateEvents();
        return this;
    },
    events: {
        "click button" : "deleteReview"
    },

    deleteReview: function(){
        var model = this.model;
        var that = this;
        model.destroy({
            success: function() {
                alert('Review destroyed');
                that.destroy();
            },
            data: { access_token: gon.token }
        });
    }
});

