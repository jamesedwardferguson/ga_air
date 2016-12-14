var app = app|| {};

app.SearchInputView = Backbone.View.extend({

  el: "#searchForm",

  // Attach events
  events: {
    'click button': 'searchFlight'
  },

  searchFlight: function(e){
    var inputOrigin = this.$el.find("input#origin").val();

    var inputDestination = this.$el.find("input#destination").val();

    
  }
});
