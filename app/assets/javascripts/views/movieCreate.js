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
        "click #submit": "createMovie",
        "click #btn-cancel": "cancelCreate"
    },

    createMovie: function(e) {
    		if (typeof(gon) == 'undefined') {
          alert('Please login first');
          return false;
         }
        $(e.target).closest('form').ajaxSubmit( {

            url: 'http://cs3213.herokuapp.com/movies.json',
            dataType: 'json',
            data: {
                // TODO: replace with real token
                access_token : gon.token
            },
            method: 'POST',
            error: function(e) {
                // error message
                console.log("ajax call to create movie failed");
            },
            success: function(e) {
                console.log("success");
            },
            beforeSubmit: function(e) {
            }
        });

        mainRouter.navigate('/', { trigger: true });
        return false;
    },

    cancelCreate: function(e) {
        mainRouter.navigate('/', { trigger: true });
    }
});