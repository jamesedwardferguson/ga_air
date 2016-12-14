var app = app || {};

app.FlightView = Backbone.View.extend({

  tagName: 'td',

  render: function(){
    var origin = this.model.get("origin");
    this.$el.text(origin);
    this.$el.prependTo("#showFlight");

    // var destination = this.model.get("destination");
    // this.$el.text(destination);
    // this.$el.prependTo("#showFlight");
    //
    // var flight_num = this.model.get("flight_num");
    // this.$el.text(flight_num);
    // this.$el.prependTo("#showFlight");
    //
    // var date = this.model.get("departure_date");
    // this.$el.text(date);
    // this.$el.prependTo("#showFlight");
  }

});

var createFlightView = function() {
  flights.each(function(flight){
    var fv = new app.FlightView({
      model:flight
    });
    fv.render();
  });
};
