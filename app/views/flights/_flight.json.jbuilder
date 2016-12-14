json.extract! flight, :id, :airplane_id, :flight_num, :origin, :destination, :departure_date, :created_at, :updated_at
json.url flight_url(flight, format: :json)
