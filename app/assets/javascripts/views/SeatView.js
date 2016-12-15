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

    var fiv = new app.FlightInfo();
    fiv.render();

  },

  events: {
    'click td': "seatSelect"
},
seatSelect: function(){
  console.log("seat is clicked");
  console.log(this.$el);
}

});
