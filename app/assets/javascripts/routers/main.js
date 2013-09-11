Xuimovie.Routers.Main = Backbone.Router.extend({
	routes: {
		"" : "mainPage",
		"loggedout" : "redirectToMain"
	},

	mainPage: function() {
		var movieCollection = new Xuimovie.Collections.Movies();
		mainView = new Xuimovie.Views.Movies({
			el: document.getElementById("application-content"),
			collection: movieCollection
		});
		movieCollection.fetch();
	},

	redirectToMain: function() {
		this.navigate("/", {trigger: true});
	}
});