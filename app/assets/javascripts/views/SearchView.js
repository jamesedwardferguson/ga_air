var app = app || {};

app.SearchView = Backbone.View.extend({

  el: "#app",

  render: function(){
    console.log("app.Searchview should be on the page");

    // Get HTML from #searchViewTemplate
    // Set the HTML of this.$el to that h
    var searchViewTemplate = $('#SearchViewTemplate').html();
    console.log(searchViewTemplate);
    this.$el.html(searchViewTemplate);

    var siv = new app.SearchInputView();
    siv.render();
  }

});
