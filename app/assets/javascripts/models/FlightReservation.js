<<<<<<< HEAD
var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: "/flights",
  default:{
    row: 1,
    column: 2
  },
  initialize: function (){
    console.log("A new seat was taken");
  }

});

var r = new app.Reservation();
=======
// var app = app || {};
//
// app.Reservation = Backbone.Model.extend({
//   urlRoot: "/flights",
//   default:{
//     reservation: ""
//   },
//   initialize: function (){
//     console.log("A new seat was taken");
//   }
//
// });
//
// var r = new app.Reservation();
>>>>>>> 9b2db8cba7af7f159dd854a53e9707a1db232078
