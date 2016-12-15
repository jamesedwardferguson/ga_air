var app = app || {};

app.SearchView = Backbone.View.extend({

  el: "#app",

  render: function(){

    var searchViewTemplate = $('#SearchViewTemplate').html();
    console.log(searchViewTemplate);
    this.$el.html(searchViewTemplate);

    var siv = new app.SearchInputView();
    siv.render();
  }

});
