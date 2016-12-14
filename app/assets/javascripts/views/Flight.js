var app = app || {};

app.AppView = Backbone.View.extend({
// this.el
// this.$el
  el: "#app",

  render: function(){
    console.log("app.AppView should be on the page");
    var AppViewTemplate = $("#AppViewTemplate").html();
    this.$el.html( AppViewTemplate );
    // Get the HTML from #AppViewTemplate
    // Set the HTML of this.$el

    var flightinputView = new app.FlightinputView();
    flightinputView.render();
  }
});
