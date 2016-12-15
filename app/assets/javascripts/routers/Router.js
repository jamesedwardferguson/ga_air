var app = app || {};

app.Router = Backbone.Router.extend({

  routes: {
    '': 'initializeApp',
    'search': 'initializeSearchFlights',
    'flights/:id': 'showFlightPlan',
    '*error': 'error'
  },

  initializeApp: function() {
    var appView = new app.AppView();
    appView.render();

  },

  showFlightPlan: function ( id ) {
<<<<<<< HEAD
=======

>>>>>>> 10e559e2445d92148301ebd7a1131bafff156218
    console.log( id );
    var flight = app.searchFlight.get( id );

    var seatView = new app.SeatView({
      model: flight
    });
<<<<<<< HEAD
  //   window.setInterval(function(){
  //   seatView.render( id );
  // },2000 );
=======


>>>>>>> 10e559e2445d92148301ebd7a1131bafff156218
    seatView.render( id );
  },


    var flightInfo = new app.FlightInfo({
      model: flight
    });

    flightInfo.render();
  },

});
