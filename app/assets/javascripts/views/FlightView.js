var app = app || {};

app.FlightView = Backbone.View.extend({

  tagName: 'p',

  render: function(){
    var origin = this.model.get("origin");
    this.$el.text(origin);
    this.$el.prependTo("#flights");

    var destination = this.model.get("destination");
    this.$el.text(destination);
    this.$el.prependTo("#flights");

    var flight_num = this.model.get("flight_num");
    this.$el.text(flight_num);
    this.$el.prependTo("#flights");

    var date = this.model.get("departure_date");
    this.$el.text(date);
    this.$el.prependTo("#flights");
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
