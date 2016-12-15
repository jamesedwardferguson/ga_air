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
// flight.fetch("origin", "destination", "departure_date", "flight_num", "airplane");
flight.fetch();
