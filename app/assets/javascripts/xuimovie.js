window.Xuimovie = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(document).ready(function() {
	var movieCollection = new Xuimovie.Collections.Movies();
	mainView = new Xuimovie.Views.Movies({
		el: document.getElementById("application-content"),
		collection: movieCollection
	});
	movieCollection.fetch();
});