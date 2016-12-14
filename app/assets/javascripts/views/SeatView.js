var app = app || {};

app.SeatView = Backbone.View.extend({

  el: "#app",

  render: function(){
    console.log("SeatView should be showing");

    var SeatInputViewTemplate = $("#SeatInputViewTemplate").html();
    this.$el.html(SeatInputViewTemplate);
    console.log(this.$el);
  }
});


// var rows = this.model.get('row');
// var columns = this.model.get('column');
// console.log(rows);

// for (i = 0; i < .rows; i++) {
//       var _row = $();
//     }
//       for (j = 0; j < .columns; j++) {
//         var _column
//       }
