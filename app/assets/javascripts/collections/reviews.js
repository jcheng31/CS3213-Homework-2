Xuimovie.Collections.Reviews = Backbone.Collection.extend({
	url: function() {
		return this.movie.url + '/reviews.json';
	},
	model: Xuimovie.Models.Review,
	initialize: function() {
		this.fetch({dataType: 'jsonp'});
	}
});