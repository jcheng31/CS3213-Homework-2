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
	Collections: {
		Movies: Backbone.Collections.extend({
			url: '//cs3213.herokuapp.com/movies.json',
			initialize: function() {
				this.fetch();
			}
		}),
		Reviews: Backbone.Collections.extend({

		})
	},
	Views: {

	},
	Routers: {

	},
	initialize: function() {

	}
};

$(document).ready(function() {
	Xuimovie.initialize();
});