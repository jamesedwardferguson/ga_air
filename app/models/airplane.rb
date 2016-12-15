# == Schema Information
#
# Table name: airplanes
#
#  id         :integer          not null, primary key
#  row        :integer
#  column     :integer
#  plane_num  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Airplane < ActiveRecord::Base
 has_many :flights

end
