class AuthController < ApplicationController

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      token = encode({user_id: @user.id})
      render json: {
        message: "Authed",
        authenticated: true,
        user: @user,
        token: token
      }, status: :accepted
    else
      render json: {
        message: "wrong auth",
        authenticated: false
      }, status: :unauthorized
    end
  end
  

end
