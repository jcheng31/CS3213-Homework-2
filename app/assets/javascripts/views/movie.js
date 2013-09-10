Xuimovie.Views.Movie = Backbone.View.extend({
	template: JST["movie"],
	initialize: function() {
		this.render();
	},
	render: function() {
		var renderedHtml = this.template(this.model.attributes);
		this.$el.replaceWith(renderedHtml);
		return this;
	}
});