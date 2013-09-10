window.Xuimovie = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(document).ready(function() {
	mainView = new Xuimovie.Views.Movies({
		el: $('#application-content')
	});
});