Xuimovie.Views.MovieEdit = Xui.View.extend({
  template: JST["movieEdit"],

  initialize: function () {},

  render: function () {
    console.log(this.model.toJSON());


    $(document.body).find('#application-content').html(this.template(this.model.toJSON()));
    this.delegateEvents();
    return this;
  },

  events: {
    "click #btn-edit": "editMovie",
    "click #btn-cancel": "cancelEdit"
  },

  editMovie: function (e) {
    e.preventDefault();

    if (typeof (gon) == 'undefined') {
      alert('Please login first');
      return false;
    }
    var movieId = this.model.get('id');
    var movie = new Xuimovie.Models.Movie({
      id: movieId,
      title: $('#movie-name').val(),
      summary: $('#movie-summary').val(),
      access_token: gon.token
    });


    //  submit the form fields via POST method
    var form = $(e.target).closest('form').ajaxSubmit({
      url: 'http://cs3213.herokuapp.com/movies/{0}.json'.format(movieId),
      dataType: 'json',
      data: {
        access_token: gon.token
      },
      method: 'PUT',
      error: function (e) {
        // error message
        console.log("ajax call to create movie failed");
      },
      success: function (e) {
        console.log("success");
      },
      beforeSubmit: function (e) {
        if ($('#movie-img').val() == "") {
          $('#movie-img').remove();
        }

        var movieName = $('#movie-name').val();
        var movieDescription = $('#movie-summary').val();

        var isMovieNameEmpty = movieName.trim() === "";
        var isMovieDescriptionEmpty = movieDescription.trim() === "";

        return !isMovieNameEmpty && !isMovieDescriptionEmpty;
      }
    });
    var xhr = form.data('jqxhr');
    var that = this;
    xhr.done(function () {
      var navigateUrl = '/movies/{0}'.format(movieId);
      mainRouter.navigate(navigateUrl, {
        trigger: true
      });
      that.destroy();
    });


  },

  cancelEdit: function (e) {
    e.preventDefault();
    var movieId = this.model.get('id');
    var navigateUrl = '/movies/{0}'.format(movieId);
    mainRouter.navigate(navigateUrl, {
      trigger: true
    });
    this.destroy();
  }
});