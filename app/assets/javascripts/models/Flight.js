var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: "/flights",

  default:{
    origin: "SYD",
    destination: "MEL",
    departure_date: "2014",
    flight_num: "2222",
    row: "",
    column: "",

  },

  initialize: function(){
    console.log("A new flight is created?");
  }
});

var flight = new app.Flight();
<<<<<<< HEAD
flight.fetch("origin", "destination", "departure_date", "flight_num", "airplane");
=======
flight.fetch();
// flight.fetch("origin", "destination", "departure_date", "flight_num", "airplane");
>>>>>>> 4aa7cb5899f91b93905837c36eeee631c108f83e
