var app = app || {};

app.Airplane = Backbone.Model.extend({
  urlRoot: "/airplanes",

  default:{
    column: 32,
    row: 4,
    plane_num:"a380",
    plane_type:"Airbus"

  },

  initialize: function(){
    console.log("A new plane is created?");
  }
});

var p1 = new app.Airplane();
console.log(p1.toJSON() );

var airplane = new app.Airplane();

airplane.fetch("row", "column", "plane_num", "plane_type");
