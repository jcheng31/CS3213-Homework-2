Xuimovie.Views.MovieCreate = Backbone.View.extend({
	template: JST["movieCreate"],
	initialize: function() {
	},
	render: function() {
		this.$el.html(this.template());
    this.delegateEvents();
		return this;
	},
  events:{
    "click #submit": "createMovie"
  },
  createMovie: function(e) {
  	var data = { 	'access_token': gon.token,
			       	 		'movie': {
			       	 			'title': $('#movie_name').val(),
			          		'summary': $('#movie_summary').val(),
			          		'img': $('#movie_img').val()
			        		}
			       	 };
		console.log(data);
		e.preventDefault();
		var url = 'http://cs3213.herokuapp.com/movies.json';
		if (typeof(gon) != 'undefined') {
			$.post(url, data).done(function(data, success) {
			});
			// mainRouter.navigate("/", { trigger: true });
		} else {
			alert("Please login first :)");
		}
  }
});
