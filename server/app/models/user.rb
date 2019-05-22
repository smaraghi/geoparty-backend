class User < ApplicationRecord
  has_many :UserQuestions
  has_many :Questions, through: :UserQuestions

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, if: :password_validation
  validates :bio, numericality: { less_than_or_equal_to: 200 }

  def password_validation
    new_record? || password_digest_changed?
  end

  has_secure_password
end
