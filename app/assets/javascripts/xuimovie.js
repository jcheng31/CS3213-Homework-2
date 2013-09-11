window.Xuimovie = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(document).ready(function() {
	mainRouter = new Xuimovie.Routers.Main();
	Backbone.history.start();
});