var app = app || {};

app.Airplanes = Backbone.Collection.extend({
    url: "/flights",

    model: app.Airplane,

    initialize: function() {
        this.on("add", function(flight) {
            var av = new app.AirplaneView({
                model: airplane
            });
            av.render();
        });
    },
});
