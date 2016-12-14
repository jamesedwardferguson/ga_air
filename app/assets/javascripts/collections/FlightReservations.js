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
//
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
>>>>>>> 25e8efd0488e116e4eec55b34fe27d932ac0f8ff
