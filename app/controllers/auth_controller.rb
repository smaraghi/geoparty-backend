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

  private

  def secret_key
    Rails.application.credentials.geoparty[:secret_key]
  end

  def encode(payload)
    JWT.encode(payload, secret_key, 'HS256')
  end

  def decode(token)
    JWT.decode(token, secret_key, true, {algorithm: 'HS256'})[0]
  end

end
