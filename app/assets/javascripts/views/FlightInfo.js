var app = app || {};

app.FlightInfo = Backbone.View.extend({

  el: "#info",

  render: function(){
    console.log("Flight info should be showing");

    var FlightInfoTemplate = $("#FlightInfoTemplate").html();
    this.$el.html(FlightInfoTemplate);

  }
});
