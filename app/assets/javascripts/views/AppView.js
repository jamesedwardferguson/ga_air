var app = app || {};

app.AppView = Backbone.View.extend({
// this.el
// this.$el
  el: "#app",

  // render: function(){
  //   console.log("app.AppView should be on the page");
  //   var AppViewTemplate = $("#AppViewTemplate").html();
  //   this.$el.html( AppViewTemplate );
  //   console.log(this.$el);
  //   // Get the HTML from #AppViewTemplate
  //   // Set the HTML of this.$el
  //   // AppViewTemplate.render()
  //   // var flightinputView = new app.FlightinputView();
  //   // flightinputView.render();
  // },

  render: function(){
    console.log("app.Searchview should be on the page");

    // Get HTML from #searchViewTemplate
    // Set the HTML of this.$el to that h
    var searchViewTemplate = $('#SearchViewTemplate').html();
    this.$el.html(searchViewTemplate);

    var siv = new app.SearchInputView();
    siv.render();
  }
});
