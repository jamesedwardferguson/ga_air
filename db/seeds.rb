User.destroy_all

  User.create({
    first_name: "Tim",
    last_name: "Silva",
    email: "silva.tim@gmail.com",
    password:"chicken",
    password_confirmation: "chicken"
  });

5.times do
  User.create({
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password:"chicken",
    password_confirmation: "chicken"
  });

end

Airplane.destroy_all

a1 = Airplane.create({
  column: 32,
  row: 4,
  plane_num:"a380",
  plane_type:"Airbus"
 });

a2 = Airplane.create({
  column: 32,
  row: 4,
  plane_num:"747",
  plane_type:"Boeing"
 });

a3 = Airplane.create({
  column: 32,
  row: 4,
  plane_num:"777",
  plane_type:"Boeing"
 });


a4 = Airplane.create({
  column: 32,
  row: 4,
  plane_num:"a320",
  plane_type:"Airbus"
 });

a5 = Airplane.create({
  column: 32,
  row: 4,
  plane_num:"737",
  plane_type:"Boeing"
 });

Flight.destroy_all

Flight.create({
  flight_num: Faker::Number.number(2),
  origin:"MEL",
  destination:"SYD",
  departure_date:Faker::Date.forward(20),
  airplane_id: a1.id
});

Flight.create({
  flight_num: Faker::Number.number(2),
  origin:"CBR",
  destination:"MEL",
  departure_date:Faker::Date.forward(20),
  airplane_id: a2.id
});

Flight.create({
  flight_num: Faker::Number.number(2),
  origin:"BNE",
  destination:"SYD",
  departure_date:Faker::Date.forward(20),
  airplane_id: a3.id
});

Flight.create({
  flight_num: Faker::Number.number(2),
  origin:"AL",
  destination:"SYD",
  departure_date:Faker::Date.forward(20),
  airplane_id: a4.id
});
