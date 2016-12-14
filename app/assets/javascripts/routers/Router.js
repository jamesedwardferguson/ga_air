var app = app || {};

app.Router = Backbone.Router.extend({

  routes: {

    '': 'initializeApp',
    'search': 'initializeSearchFlights',
    '*error': 'error'
  },


  initializeApp: function() {
    var appView = new app.AppView();
    appView.render();
  },

  initializeSelectSeat: function(){
    var seatView = new app.SeatView();
    seatView.render();
  }
});
