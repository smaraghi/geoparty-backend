class UserQuestion < ApplicationRecord
  belongs_to :Question
  belongs_to :User
end
