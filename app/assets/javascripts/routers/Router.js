var app = app || {};

app.Router = Backbone.Router.extend({

  routes: {
    '': 'initializeSearchFlights',
    '*error': 'error'
  },

  initializeSearchFlights: function(){
    var searchView = new app.SearchView();
    searchView.render();
  }
});
