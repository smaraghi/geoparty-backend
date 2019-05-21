
class UsersController < ApplicationController

  def create
    @user = User.create(username: params[:username], password: params[:password], bio: params[:bio], avatar: 'world.jpg')
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    @user.total_questions += 1
    if params[:correct]
      @user.correct_answers += 1
    end
    @user.save
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
