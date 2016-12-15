json.extract! flight, :id, :airplane_id, :flight_num, :origin, :destination, :departure_date, :created_at, :updated_at
json.url flight_url(flight, format: :json)
json.airplane flight.airplane
json.row flight.airplane.row
json.column flight.airplane.column
