Xuimovie.Routers.Main = Backbone.Router.extend({
	routes: {
		"" : "initialize"
	},

	initialize: function() {
		var movieCollection = new Xuimovie.Collections.Movies();
		mainView = new Xuimovie.Views.Movies({
			el: document.getElementById("application-content"),
			collection: movieCollection
		});
		movieCollection.fetch();
	}
});