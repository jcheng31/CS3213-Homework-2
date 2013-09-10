window.Xuimovie = {
	Models: {
		Movie: Backbone.Model.extend({
			defaults: {
				id: 0,
				summary: "",
				title: "",
				updated_at: "",
				img_url: "",
				user: {}
			}
		}),
		Review: Backbone.Model.extend({
			defaults: {
				comment: "",
				id: 0,
				movie_id: 0,
				score: 0,
				updated_at: "",
				user: {}
			}
		})
	},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {

	}
};

Xuimovie.Collections.Movies = Backbone.Collection.extend({
	url: '//cs3213.herokuapp.com/movies.json',
	model: Xuimovie.Models.Movie,
	initialize: function() {
		this.fetch({dataType: 'jsonp'});
	}
});

Xuimovie.Collections.Reviews = Backbone.Collection.extend({
	url: function() {
		return this.movie.url + '/reviews.json';
	},
	model: Xuimovie.Models.Review,
	initialize: function() {
		this.fetch({dataType: 'jsonp'});
	}
});

$(document).ready(function() {
	Xuimovie.initialize();
});