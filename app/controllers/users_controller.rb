
class UsersController < ApplicationController

  def create
    @user = User.create(username: params[:username], password: params[:password], bio: params[:bio], avatar: 'world.jpg')
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    
  end

  def token
    token = request.headers["Authentication"].split(' ')[1]
    payload = decode(token)
    @user = User.find(payload["user_id"])
    if @user
      render json: @user
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :bio, :avatar, :total_questions, :correct_answers)
  end

end
