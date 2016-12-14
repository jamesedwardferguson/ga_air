var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: "/flights",
  model: app.Flight,

  initialize: function(){
    console.log("A new collection is created");

    this.on("add", function(flight){
      var fv = new app.FlightView({
        model: Flight
      });
      fv.render();
    });
  }
});
