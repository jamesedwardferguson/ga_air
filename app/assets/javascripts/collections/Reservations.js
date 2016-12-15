var app = app || {};

app.Reservations = Backbone.Collection.extend({
    url: "/reservations",

    model: app.Reservation

    // initialize: function() {
    //     this.on("add", function(reservations) {
    //         var sv = new app.SeatView({
    //             model: reservations
    //         });
    //         sv.render();
    //     });
    // },
});
