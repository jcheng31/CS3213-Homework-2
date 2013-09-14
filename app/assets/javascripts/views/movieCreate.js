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
        $(e.target).closest('form').ajaxSubmit( {

            url: 'http://cs3213.herokuapp.com/movies.json',
            dataType: 'json',
            data: {
                // TODO: replace with real token
                access_token : 'f5658b3bf5c186160a537b128f57b3a1'
            },
            method: 'POST',
            error: function(e) {
                // error message
                console.log("ajax call to create movie failed");
            },
            success: function(e) {
                // TODO: do routing in backbone
                console.log("success");
            },
            beforeSubmit: function(e) {
                // TODO: do validation
            }
        });

        return false;
    },

    cancelCreate: function(e) {
        console.log("btn-cancel clicked");
    }
});
