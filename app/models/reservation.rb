class Reservation < ActiveRecord::Base
 belongs_to :flight, dependant: :destroy
 belongs_to :user, dependant: :destroy
end
