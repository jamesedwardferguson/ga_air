var app = app || {};

app.SeatView = Backbone.View.extend({


  el: "#app",

  render: function(){
    var rows = this.model.get('row');
    var columns = this.model.get('column');
    // console.log(rows);
    // console.log(columns);

    var SeatInputViewTemplate = $("#SeatInputViewTemplate").html();
    this.$el.html(SeatInputViewTemplate);
    console.log(this.$el);


    var $table = $("#mytab1");
    var $th = $("<th></th>").html();
      $table.append($th);

      for (var i = 1; i <= rows; i++) {
        var $tr = $("<tr></tr>").html("");

      for (var j = 0; j < columns+1; j++) {
        var $td = $("<td></td>");
        if (j !== 2){
        $td.html("seat");
      }
      else {
        $td.html(i);
        $td.attr("id", "aisle");
      }

        $tr.append($td);
     }
     $table.append($tr);
 }

  },

  events: {
    'click td': "seatSelect"
},
seatSelect: function(){
  console.log("seat is clicked");
  console.log(this.$el);
}

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
            // var $th = $("<th></th>").html();
            //   $table.append($th);

            console.log( "DATA", data );
            for (var i = 1; i <= rows; i++) {
                var $tr = $("<tr></tr>").html("");


                for (var j = 0; j < columns; j++) {
                    var column = i;
                    var row = j + 1;
                    var flight_id = view.model.get("id");

                    // console.log( row, column );

                    var booking = app.bookings.findWhere({
                        res_row: row,
                        res_col: column,
                        flight_id: flight_id
                    });

                    var alphabet = ["A", "B", "C", "D"];
                    var $td = $("<td></td>");
                    $td.attr("data-row", row);
                    $td.attr("data-column", column);

                    if ( booking ) {
                        $td.addClass("reserved");
                    }

                    // if (j !== 2) {
                        var seat = i + alphabet[j];
                        $td.html(seat);
                    // } else {
                    //     $td.html("<br>");
                    //     $td.attr("id", "aisle");
                    // }

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
        'click td': "seatSelect",
        'click #book': "bookFlight"
    },

    seatSelect: function( e ) {
        var $clickedTD = $(e.currentTarget);
        var row = $clickedTD.data("row");
        var column = $clickedTD.data("column");
        $clickedTD.toggleClass('seatClicked');
        console.log( row, column );

        var name = this.model.get("name");
        $clickedTD.text(name);
        console.log( this.model.toJSON(), "ADS" );
        console.log(this.model.get("userId"));
        app.newResModel = new app.Reservation({
            flight_id: this.model.get( "id" ),
            user_id: this.model.get("userId"),
            res_col: $clickedTD.data("column") ,
            res_row: $clickedTD.data("row")
        });


    },

    bookFlight: function(){
        app.newResModel.save();
         app.router.navigate("/", true);
    }


});
