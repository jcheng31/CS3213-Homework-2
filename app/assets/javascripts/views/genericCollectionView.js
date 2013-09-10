Xuimovie.Views.GenericCollectionView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'add', this.collectionAddHandler);
		this.listenTo(this.collection, 'change', this.collectionChangeHandler);
		this.listenTo(this.collection, 'remove', this.collectionRemoveHandler);

		this.childViews = [];
		this.render();
	},

	render: function() {
		var fragment = document.createDocumentFragment();

		_(this.childViews).each(function(curr) {
			fragment.appendChild(curr.render().el);
		});

		this.$el.html(fragment);
		return this;
	},

	collectionAddHandler: function(addedItem) {
		this.createViewForItem(addedItem);
		this.render();
	},

	collectionRemoveHandler: function(removedItem) {
		this.removeModelFromChildViews(removedItem);
		this.render();
	},

	collectionChangeHandler: function(changedItem) {
		this.removeModelFromChildViews(changedItem);
		this.childViews.push(this.createViewForItem(changedItem));
	},

	createViewForItem: function(item) {
		var newView = new this.subView({
			model: item
		});
		return newView;
	},

	removeModelFromChildViews: function(model) {
		this.childViews = this.childViews.filter(function(view) {
			return view.model != model;
		});
	}
});