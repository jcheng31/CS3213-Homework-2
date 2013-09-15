Xuimovie.Views.MovieEdit = Backbone.View.extend({
    el: window.document.getElementById('application-content'),

    template: JST["movieEdit"],

    initialize: function() {
    },

    render: function() {
        console.log(this.model.toJSON());


        $(document.body).find('#application-content').html(this.template(this.model.toJSON()));
        this.delegateEvents();
        return this;
    },

    events:{
        "click #btn-edit": "createMovie",
        "click #btn-cancel": "cancelCreate"
    },

    createMovie: function(e) {
        if (typeof(gon) == 'undefined') {
            alert('Please login first');
            return false;
        }

        // submit the form fields via POST method
        $(e.target).closest('form').ajaxSubmit( {
            url: 'http://cs3213.herokuapp.com/movies.json',
            dataType: 'json',
            data: {
                access_token : gon.token
            },
            method: 'POST',
            error: function(e) {
                // error message
                console.log("ajax call to create movie failed");
            },
            success: function(e) {
                // TODO: add Backbone Route
                console.log("success");
            },
            beforeSubmit: function(e) {
                // TODO: add validation for the required field (if not done automatically)
            }
        });

        mainRouter.navigate('/', { trigger: true });
        return false;
    },

    cancelCreate: function(e) {
        mainRouter.navigate('/', { trigger: true });
    }
});