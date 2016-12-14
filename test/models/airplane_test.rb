# == Schema Information
#
# Table name: airplanes
#
#  id         :integer          not null, primary key
#  row        :integer
#  column     :integer
#  plane_num  :string
#  type       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class AirplaneTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
