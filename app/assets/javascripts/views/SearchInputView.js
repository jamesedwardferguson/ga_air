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

    var searchFlight = app.searchFlight.where({
      destination: inputDestination,
      origin: inputOrigin
    });

    console.log(searchFlight);

    createFlightView(searchFlight);

        // get flights.where({:desination => inputDestination, :origin => inputDestination})
    // re-render the flight list view
  },

  render: function(){
    console.log("search input should have been here!");

    var fvTemplate = $('#SearchInputTemplate').html();
    console.log( fvTemplate );
    this.$el.html(fvTemplate);
  }
});
