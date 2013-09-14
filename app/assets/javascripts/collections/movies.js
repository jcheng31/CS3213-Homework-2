Xuimovie.Collections.Movies = Backbone.Collection.extend({
	// url: '//cs3213.herokuapp.com/movies.json',
	url: function() {
		return '//cs3213.herokuapp.com/movies.json?page=' + this.attributes.page;
	},
	model: Xuimovie.Models.Movie,
	initialize: function() {
	}
});