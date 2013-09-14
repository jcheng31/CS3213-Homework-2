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
		this.delegateEvents();
		return this;
	},
	events: {
		"click img#viewMovie": "viewMovieDetail"
	},
	viewMovieDetail: function() {
		mainRouter.navigate("movies/" + this.model.attributes.id, {
			trigger: true
		});
	}
});