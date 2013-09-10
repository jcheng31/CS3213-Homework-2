Xuimovie.Collections.Movies = Backbone.Collection.extend({
	url: '//cs3213.herokuapp.com/movies.json',
	model: Xuimovie.Models.Movie,
	initialize: function() {
	}
});