# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  first_name      :string
#  last_name       :string
#  email           :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  has_many :reservations
  has_secure_password
  validates :first_name, :last_name, presence: true
  validates :email, presence: true, format: /\A\S+@\S+\z/,
            uniqueness: {case_sensitive: false}
end
