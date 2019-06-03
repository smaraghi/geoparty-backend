
class UserSerializer < ActiveModel::Serializer

  attributes :id, :username, :bio, :avatar, :total_questions, :correct_answers

end
