Xuimovie.Models.Movie = Backbone.Model.extend({
	defaults: {
		id: 0,
		summary: "",
		title: "",
		updated_at: "",
		img_url: "",
		user: {}
	},
	initialize: function() {

	},
    url: function() {
        return 'http://cs3213.herokuapp.com/movies/{0}.json'.format(this.id);
    }
});
