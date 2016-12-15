var app = app || {};

app.SeatView = Backbone.View.extend({

    el: "#app",

    render: function() {
        var rows = this.model.get('row');
        var columns = this.model.get('column');

        var SeatInputViewTemplate = $("#SeatInputViewTemplate").html();
        this.$el.html(SeatInputViewTemplate);
        var view = this;

        app.bookings = new app.Reservations();


        app.bookings.fetch().done(function(data) {
            // WAIT FOR ALL OF THE RESERVATIONS TO LOAD
            var $table = $("#mytab1");

            console.log( "DATA", data );
            for (var i = 1; i <= rows; i++) {
                var $tr = $("<tr></tr>").html("");

                for (var j = 0; j < columns; j++) {


                    var column = i;
                    var row = j + 1;
                    var flight_id = view.model.get("id");

                    if (j>2){
                        row = j +2;
                    }

                    var booking = app.bookings.findWhere({
                        res_row: column,
                        res_col: row,
                        flight_id: flight_id
                    });

                    var alphabet = ["A", "B", "C", "D"];
                    var $td = $("<td></td>");
                    $td.attr("data-row", row);
                    $td.attr("data-column", column);
                    $td.addClass("seats");

                    if ( booking ) {
                        $td.addClass("reserved");
                        $td.removeClass("seats");
                    }

                    var seat = i + alphabet[j];
                    $td.html(seat);

                    $tr.append($td);

                    if ( row === 2 ) {
                        var $newTD = $("<td>");
                        $newTD.html("<br>");
                        $newTD.attr("id", "aisle");
                        $tr.append($newTD);
                    }
                }
                $table.append($tr);
            }

            var fiv = new app.FlightInfo();
            fiv.render();
        });
    },

    events: {
        'click .seats   ': "seatSelect",
        'click #book': "bookFlight"
    },

    seatSelect: function( e ) {
        var $clickedTD = $(e.currentTarget);
        var row = $clickedTD.data("row");
        var column = $clickedTD.data("column");
        $clickedTD.toggleClass('seatClicked');
        console.log("Row:" + row);
        console.log("Column:" + column);

        var name = this.model.get("name");
        $clickedTD.text(name);
        console.log( this.model.toJSON(), "ADS" );
        console.log(this.model.get("userId"));
        app.newResModel = new app.Reservation({
            flight_id: this.model.get( "id" ),
            user_id: this.model.get("userId"),
            res_col: $clickedTD.data("row") ,
            res_row: $clickedTD.data("column")
        });
        // console.log(newResModel.toJSON());
    },

    bookFlight: function(){
        app.newResModel.save();
        // var reload = new app.SeatView();
        // reload.render();
        app.router.navigate("/", true);
        // window.setInterval()
    },

});
