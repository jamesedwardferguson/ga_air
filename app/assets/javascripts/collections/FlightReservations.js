<<<<<<< HEAD
var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: "/flights",
  model: app.Flight,
  
  initialize: function(){
    console.log("A new collection was added");

    this.on("add", function(reservation){
      var sv = new app.FlightView({
        model: flightReservation
      });
      sv.render();

    });

  }
});
=======
// var app = app || {};
//
// app.Flights = Backbone.Collection.extend({
//   url: "/flights",
//   model: app.Flight,
//   initialize: function(){
//     console.log("A new collection was added");
//
//     this.on("add", function(reservation){
//       var sv = new app.FlightView({
//         model: flightReservation
//       });
//       sv.render();
//
//     });
//
//   }
// });
>>>>>>> 9b2db8cba7af7f159dd854a53e9707a1db232078
