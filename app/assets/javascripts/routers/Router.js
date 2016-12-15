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

    console.log( id );
    var flight = app.searchFlight.get( id );

    var seatView = new app.SeatView({
      model: flight
    });


    seatView.render( id );
  },


    var flightInfo = new app.FlightInfo({
      model: flight
    });

    flightInfo.render();
  },

});
