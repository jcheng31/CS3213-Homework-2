Xuimovie.Views.Reviews = Xuimovie.Views.GenericCollectionView.extend({
    template: JST["reviews"],
    subView: Xuimovie.Views.Review,

    events: {
        'click #create-review-btn': 'createReview'
    },

    createReview: function(e) {
        var data = { 	'access_token': gon.token,
            'review': {
                'score': $('#review_score').val(),
                'comment': $('#review_comment').val()
            }
        };
        console.log(data);
        e.preventDefault();
        var collection = this.collection;
        if (typeof(gon) != 'undefined') {
            $.post(this.collection.url, data).done(function(data, success) {
                collection.fetch();
            });
        } else {
            alert("Please login first :)");
            return false;
        }
        $('#review_score').val("");
        $('#review_comment').val("");
    }
});
