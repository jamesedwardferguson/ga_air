var app = app || {};

app.FlightView = Backbone.View.extend({

  tagName: 'tr',

  render: function(){
    var origin = this.model.get("origin");
    var $origin = $("<td>").text( origin );
    this.$el.append( $origin );

    var destination = this.model.get("destination");
    var $destination = $("<td>").text( destination );
    this.$el.append($destination);

    var flight_num = this.model.get("flight_num");
    var $a = $("<a>").text(flight_num);
    $a.attr("id", "selectedFlight");
    $a.attr("src", "#");
    var $flight_num = $("<td>").html($a);
    this.$el.append($flight_num);

    var date = this.model.get("departure_date");

    var $date = $("<td>").text(date);
    this.$el.append($date);
    this.$el.prependTo("#showFlight");
  },

  events: {
    'click #selectedFlight': 'selectSeatPage'
  },

  selectSeatPage: function(){
    app.router.navigate("/flights/" + this.model.get('id'), true);
    // We need to create a reservations collection.
    // Then we need to render a view for every reservation in that collection (the seats on the flight)

  },


});

var createFlightView = function() {
  flights.each(function(flight){
    var fv = new app.FlightView({
      model:flight
    });
    fv.render();
  });
};


// You should see this comment
