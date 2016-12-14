var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: "/flights",
  default:{
    reservation: ""
  },
  initialize: function (){
    console.log("A new seat was taken");
  }

});

var r = new app.Reservation();
