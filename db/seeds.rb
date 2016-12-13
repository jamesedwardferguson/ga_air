User.destroy_all
5.times do
  User.create({
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password:"chicken",
    password_confirmation: "chicken"

  });

end

a1 =  Airplane.create({
  column: 32,
  row: 4,
  plane_num: Faker::Number.number(4)
 });

a2 =  Airplane.create({
  column: 32,
  row: 4,
  plane_num: Faker::Number.number(4)
 });

a3 =  Airplane.create({
  column: 32,
  row: 4,
  plane_num: Faker::Number.number(4)
 });


a4 =  Airplane.create({
  column: 32,
  row: 4,
  plane_num: Faker::Number.number(4)
 });

a5 =  Airplane.create({
  column: 32,
  row: 4,
  plane_num: Faker::Number.number(4)
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
