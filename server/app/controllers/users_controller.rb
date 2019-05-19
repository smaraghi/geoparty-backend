
class UsersController < ApplicationController

  def create
  end

  def get_score
    @user = User.find(params: [:id])
    render json: {total: @user.total_questions, correct: @user.correct_answers}
  end



  def token
    token = request.headers["Authentication"].split(' ')[1]
    payload = decode(token)
    @user = User.find(payload["user_id"])
    if @user
      render json: @user
    end
  end

end
