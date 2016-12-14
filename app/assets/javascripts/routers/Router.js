var app = app || {};

app.Router = Backbone.Router.extend({

  routes: {
    '': 'initializeApp',
    'search': 'initializeSearchFlights',
    'flights/:id': 'showFlightPlan',
    '*error': 'error'
  },



  showFlightPlan: function ( id ) {
    // Create a new instance of a new view
    // Render it.
    // You'll also need to create a new template for this view in <script> tags
    console.log( id );
  },

  initializeApp: function() {
    var appView = new app.AppView();
    appView.render();
  }

});
