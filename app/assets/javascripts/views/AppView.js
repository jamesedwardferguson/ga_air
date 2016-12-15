var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",
  render: function(){

    var searchViewTemplate = $('#SearchViewTemplate').html();
    this.$el.html(searchViewTemplate);

    var siv = new app.SearchInputView();
    siv.render();
  }
});
