Xuimovie.Views.Review = Backbone.View.extend({
  template: JST["review"],
  url:'//cs3213.herokuapp.com/movies/',
  initialize: function() {
    this.render();
  },
  render: function() {
    var renderedHtml = this.template(this.model.attributes);
    this.$el.html(renderedHtml);
    return this;
  },
  events: {
    "click button#deleteReview" : "deleteReview"
  },

  deleteReview: function(){
    alert("url " + this.model.url);
  }
});

