Xuimovie.Views.Movies = Xuimovie.Views.GenericCollectionView.extend({
	template: JST["movies"],
	subView: Xuimovie.Views.Movie,
	events: {
		"click span#next.enabled": "nextPage",
		"click span#prev.enabled": "prevPage"
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
		var currentLocation = Backbone.history.location.hash;
		var currentPage = currentLocation.slice(1);

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
	}
});