Xuimovie.Views.Movie = Backbone.View.extend({
	template: JST["movie"],
  tagName: "li",
  className: "span4",
	initialize: function() {
		this.render();
	},
	render: function() {
		var renderedHtml = this.template(this.model.attributes);
		this.$el.html(renderedHtml);
		return this;
	},
  events:{
    "click button#viewMovie": "viewMovieDetail"
  },
  viewMovieDetail: function(){
    alert("viewMovie !!!!");
  }
});
