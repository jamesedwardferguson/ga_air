json.extract! flight, :id, :airplane_id, :flight_num, :origin, :destination, :departure_date, :created_at, :updated_at
json.url flight_url(flight, format: :json)
<<<<<<< HEAD
json.row flight.airplane.row
json.column flight.airplane.column
json.plane_num flight.airplane.plane_num
json.plane_type flight.airplane.plane_type
=======
json.airplane flight.airplane
json.row flight.airplane.row
json.column flight.airplane.column
>>>>>>> eba9ea9638d496657ee26bde1158fbc3e1feb43f
