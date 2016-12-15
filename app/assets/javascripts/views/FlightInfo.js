var app = app || {};

app.FlightInfo = Backbone.View.extend({

  el: "#info",

  render: function(){
    console.log("Flight info should be showing");

  var flightNum = this.model.get("flight_num");
  var origin = this.model.get('origin');

  var destination = this.model.get('destination');
  var depDate = this.model.get('departure_date');
 // console.log(flightNum + origin + destination + depDate);

    var FlightInfoTemplate = $("#FlightInfoTemplate").html();
    this.$el.html(FlightInfoTemplate);
    // this.$el.append(origin);
    this.$("#origin").append(origin);
    this.$("#destination").append(destination);
    this.$("#fn").append(flightNum);
    this.$("#dd").append(depDate);

  }
});
