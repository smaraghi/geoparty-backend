class User < ApplicationRecord
  has_many :UserQuestions
  has_many :Questions, through: :UserQuestions

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true

  has_secure_password
end
