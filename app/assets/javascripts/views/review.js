Xuimovie.Views.Review = Backbone.View.extend({
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
    this.model.url = "http://cs3213.herokuapp.com/movies/"+ this.model.get("movie_id") +".json/reviews/"+ this.model.id + ".json";
    alert("2222"+this.model.url);
    this.model.destroy({
      headers: {
        auth_token: gon.token
      }
    });
  }
});

