var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: "/reservations",

  default:{
    flight_id: "10",
    user_id: "28",
    res_col: 1,
    res_row: 2
  },

  initialize: function(){
    console.log("A new reservation is created!");
  }
});

// var flight = new app.Flight();
// flight.fetch();
