var app = app || {};

app.Router = Backbone.Router.extend({

  routes: {

    '': 'initializeApp',
    'search': 'initializeSelectSeat',
    '*error': 'error'

  },

  initializeApp: function() {
    var appView = new app.AppView();
    appView.render();
  },
});
