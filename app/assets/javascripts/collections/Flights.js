var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: "/flights",
  model: app.Flight,

  initialize: function(){
    console.log("A new collection is created");

    this.on("add", function(flight){
      var fv = new app.FlightView({
        model: flight
      });
      fv.render();
    });
  },

  // filterSearch: function(origin){
  //   var matchedResult = this.filter(function(flight){
  //     return flight.attributes.origin.index(origin) !== -1;
  //   });
  //   return new app.Flights(matchedResult);
  // }
});
