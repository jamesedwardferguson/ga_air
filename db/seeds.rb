User.destroy_all

u1 = User.create({
    first_name: "Tim",
    last_name: "Silva",
    email: "silva.tim@gmail.com",
    password:"chicken",
    password_confirmation: "chicken"
  });


u2 = User.create({
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password:"chicken",
    password_confirmation: "chicken"
  });

u3 = User.create({
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password:"chicken",
    password_confirmation: "chicken"
  });

u4 = User.create({
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password:"chicken",
    password_confirmation: "chicken"
  });
u5 = User.create({
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password:"chicken",
    password_confirmation: "chicken"
  });

Airplane.destroy_all

a1 = Airplane.create({
  column: 4,
  row: 32,
  plane_num:"a380",
  plane_type:"Airbus"
 });

a2 = Airplane.create({
  column: 4,
  row: 32,
  plane_num:"747",
  plane_type:"Boeing"
 });

a3 = Airplane.create({
  column: 4,
  row: 32,
  plane_num:"777",
  plane_type:"Boeing"
 });


a4 = Airplane.create({
  column: 4,
  row: 32,
  plane_num:"a320",
  plane_type:"Airbus"
 });

a5 = Airplane.create({
  column: 4,
  row: 32,
  plane_num:"737",
  plane_type:"Boeing"
 });

Flight.destroy_all

f1 = Flight.create({
  flight_num: Faker::Number.number(2),
  origin:"MEL",
  destination:"SYD",
  departure_date:Faker::Date.forward(20),
  airplane_id: a1.id
});

f2 = Flight.create({
  flight_num: Faker::Number.number(2),
  origin:"CBR",
  destination:"MEL",
  departure_date:Faker::Date.forward(20),
  airplane_id: a2.id
});

f3 = Flight.create({
  flight_num: Faker::Number.number(2),
  origin:"BNE",
  destination:"SYD",
  departure_date:Faker::Date.forward(20),
  airplane_id: a3.id
});

f4 = Flight.create({
  flight_num: Faker::Number.number(2),
  origin:"AL",
  destination:"SYD",
  departure_date:Faker::Date.forward(20),
  airplane_id: a4.id
});

Reservation.destroy_all

Reservation.create({
  flight_id:f2.id,
  user_id:u2.id,
  res_col:8,
  res_row:3
});

Reservation.create({
  flight_id:f4.id,
  user_id:u4.id,
  res_col:1,
  res_row:5
});

Reservation.create({
  flight_id:f3.id,
  user_id:u4.id,
  res_col:9,
  res_row:2
});

Reservation.create({
  flight_id:f1.id,
  user_id:u3.id,
  res_col:6,
  res_row:5
});

Reservation.create({
  flight_id:f4.id,
  user_id:u2.id,
  res_col:10,
  res_row:20
});
