# == Schema Information
#
# Table name: flights
#
#  id             :integer          not null, primary key
#  airplane_id    :integer
#  flight_num     :integer
#  origin         :string
#  destination    :string
#  departure_date :datetime
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Flight < ActiveRecord::Base
  belongs_to :airplane, dependent: :destroy
  has_many :reservations
  has_many :users, :through => :reservations
end

