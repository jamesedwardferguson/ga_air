var app = app || {};

app.SearchView = Backbone.View.extend({

  el: "#app",

  render: function(){
    console.log("app.Searchview should be on the page");

    // Get HTML from #searchViewTemplate
    // Set the HTML of this.$el to that h
    var searchViewTemplate = $('#searchViewTemplate').html();
    console.log(searchViewTemplate);
    this.$el.html(searchViewTemplate);
  }

});
