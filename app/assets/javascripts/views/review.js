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
    var url = "http://cs3213.herokuapp.com/movies/12/reviews/" + this.model.id +".json";
    var model = this.model;
    if(typeof gon != 'undefined'){
      $.ajax(
        {
        type: "DELETE",
        data: {"access_token": gon.token },
        url: url,
        error: function() {
          alert("please only delete your own review.");
        }
      }).done(function(){
        model.destroy();
      });
    } else{
      alert("please login first!");
    }
  }
});

