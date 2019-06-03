class Question < ApplicationRecord
  has_many :UserQuestions
  has_many :Users, through: :UserQuestions
end
