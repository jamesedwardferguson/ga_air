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

require 'test_helper'

class FlightTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
