var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",

  render: function(){
    console.log("app.Searchview should be on the page");

    var searchViewTemplate = $('#SearchViewTemplate').html();
    this.$el.html(searchViewTemplate);

    var siv = new app.SearchInputView();
    siv.render();
  }

});
