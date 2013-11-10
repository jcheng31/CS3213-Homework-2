Xuimovie.Models.Movie = Xui.Model.extend({
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
    return 'http://cs3213.herokuapp.com/movies/' + this.id + '.json';
  }
});
