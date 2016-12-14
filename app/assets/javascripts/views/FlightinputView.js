var app = app || {};

app.FlightinputView = Backbone.View.extend({
  el: "#flightForm",

  events: {
    'click button': 'createFlight',
    'keydown textarea': 'checkForEnter'
  },

  checkForEnter: function(e){
    var ENTER_KEY = 13;
    if ( e.which === ENTER_KEY && !e.shiftKey ){
      e.preventDefault();
      this.createFlight();
    }
  },

  createFlight: function(e){
    // I want to select the textarea and get value
    var userInput = this.$el.find("textarea").val();

    var flight = new app.Flight({
      content: userInput
    });
    flight.save().done(function(){
      app.flights.add( flight );
    });

    this.$el.find("textarea").val('').focus();
      // I want to create a secret with this value
  },

  render: function (){
    console.log("app.FlightInputView should be on the page");
    var sivTemplate = $("#FlightInputViewTemplate").html();
    this.$el.html( sivTemplate );
  }
  // We select an element (or create an element)
    // Do this by using el or tagname


});
