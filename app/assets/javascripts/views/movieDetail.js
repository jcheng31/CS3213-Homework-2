Xuimovie.Views.MovieDetail = Backbone.View.extend({
	template: JST["movieDetail"],
	initialize: function() {
		this.render();
	},
	render: function() {
		var renderedHtml = this.template(this.model.attributes);
		this.$el.html(renderedHtml);
    this.delegateEvents();
		return this;
	},
  events:{
    //"click button#viewMovie": "viewMovieDetail"
  },
});
