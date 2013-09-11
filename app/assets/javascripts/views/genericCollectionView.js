Xuimovie.Views.GenericCollectionView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'add', this.collectionAddHandler);
		this.listenTo(this.collection, 'change', this.collectionChangeHandler);
		this.listenTo(this.collection, 'remove', this.collectionRemoveHandler);

		this.childViews = [];
		this.render();
	},

	render: function() {
		var selfRendered = this.template({});
		this.$el.html(selfRendered);

		var fragment = document.createDocumentFragment();

		_(this.childViews).each(function(curr) {
			fragment.appendChild(curr.render().el);
		});

		this.$('#subview-container').html(fragment);

		return this;
	},

	collectionAddHandler: function(addedItem) {
		var newView = this.createViewForItem(addedItem);
		this.childViews.push(newView);
		this.render();
	},

	collectionRemoveHandler: function(removedItem) {
		this.removeModelFromChildViews(removedItem);
		this.render();
	},

	collectionChangeHandler: function(changedItem) {
		this.childViews = [];
		var that = this;
		this.collection.each(function(model) {
			that.childViews.push(that.createViewForItem(model));
		});
		this.render();
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