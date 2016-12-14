var app = app|| {};

app.SearchInputView = Backbone.View.extend({

  el: "#searchForm",

  // Attach events
  events: {
    'click button': 'searchFlight'
  },

  searchFlight: function(e){
    var inputOrigin = this.$el.find("#origin").val();

    var inputDestination = this.$el.find("#destination").val();
  },

  render: function(){
    console.log("search input should have been here!");

    var fvTemplate = $('#SearchInputTemplate').html();
    console.log( fvTemplate );
    this.$el.html(fvTemplate);
  }
});
