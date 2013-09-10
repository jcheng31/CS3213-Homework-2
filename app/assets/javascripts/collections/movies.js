Xuimovie.Collections.Movies = Backbone.Collection.extend({
	url: '//cs3213.herokuapp.com/movies.json',
	model: Xuimovie.Models.Movie,
	initialize: function() {
	},
	parse: function(response) {
		console.log(response);
		return response;
	}
});