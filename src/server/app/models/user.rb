class User < ApplicationRecord
  has_many :UserQuestions
  has_many :Questions, through: :UserQuestions

  has_secure_password 
end
