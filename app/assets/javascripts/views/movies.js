Xuimovie.Views.Movies = Xui.CollectionView.extend({
	template: JST["movies"],
	subView: Xuimovie.Views.Movie,
	events: {
		"click span#next.enabled": "nextPage",
		"click span#prev.enabled": "prevPage",
		"click a#new-movie-btn": "toNewMoviePage"
	},

	nextPage: function() {
		var currentPage = this._getCurrentPageNumber();
		
		var nextPage = currentPage + 1;

		this._navigateToPage(nextPage);
	},

	prevPage: function() {
		var currentPage = this._getCurrentPageNumber();

		var prevPage;
		if (currentPage !== 1) {
			prevPage = currentPage - 1;
		} else {
			prevPage = 1;
		}

		this._navigateToPage(prevPage);
	},

	_getCurrentPageNumber: function() {
        // if http://localhost:3000/2, pathname is "/2"
        var currentPage = Xui.history.location.pathname.replace("/","");

		if (currentPage === "") {
			currentPage = 1;
		} else {
			currentPage = parseInt(currentPage, 10);
		}

		return currentPage;
	},

	_navigateToPage: function(page) {
		this.undelegateEvents();
		mainRouter.navigate("/" + page, {
			trigger: true
		});
		this.destroy();
	},

	toNewMoviePage: function(e) {
		e.preventDefault();
		this._navigateToPage('new_movie');
	}
});