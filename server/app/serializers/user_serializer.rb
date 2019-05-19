
class UserSerializer < ActiveModel::Serializer

  attributes :id, :username, :total_questions, :correct_answers

end
