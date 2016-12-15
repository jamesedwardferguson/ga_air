var app = app || {};

$(document).ready(function(){

  if($("#app").length === 0){
    return false;
  }

  app.searchFlight = new app.Flights();
  app.searchFlight.fetch().done(function () {


    app.router = new app.Router();
    Backbone.history.start();
  });


});
