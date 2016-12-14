module AirplanesHelper

 def num_seats(airplane)
   airplane.row * airplane.column
 end

 def full_plane_name(airplane)
   "#{airplane.plane_type+' '+airplane.plane_num}"
 end



end
