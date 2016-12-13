class User < ActiveRecord::Base
  has_many :reservations
  has_secure_password
  validates :first_name, :last_name, presence: true
  validates :email, presence: true, format: /\A\S+@\S+\z/,
            uniqueness: {case_sensitive: false}
end
