Xuimovie.Views.MovieCreate = Backbone.View.extend({
	template: JST["movieCreate"],
	initialize: function() {
	},
	render: function() {
		this.$el.html(this.template());
    this.delegateEvents();
		return this;
	},
  events:{
    "click #save_movie": "createMovie"
  },
  createMovie: function(e) {
  	alert("CLICKED");
  }
});
