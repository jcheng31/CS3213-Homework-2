Xuimovie.Models.Review = Xui.Model.extend({
	defaults: {
		comment: "",
		id: 0,
		movie_id: 0,
		score: 0,
		updated_at: "",
		user: {}
	}, 

  url: function() {
    var collectionUrl = _.result(this.collection, 'url');
    // Remove .json part
    collectionUrl = collectionUrl.slice(0, -5);
    return collectionUrl + '/' + this.get('id') +'.json';
  }
});