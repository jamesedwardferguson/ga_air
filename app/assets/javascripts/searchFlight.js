var app = app || {};

$(document).ready(function(){

  // Am I on the Backbone page?
    // Should I actually create these collections and show the views?
  if($("#app").length === 0){
    return false;
  }

  app.searchFlight = new app.Flights();
  app.searchFlight.fetch();

  app.router = new app.Router();
  Backbone.history.start();
  
  // Here is when they want to pay attention to the hash fragments

  // window.setInterval( function(){
  //   app.reservations.fetch();
  // },2000);

});
