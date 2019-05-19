Rails.application.routes.draw do

  post '/login', to: 'auth#create'
  get '/verify_token', to: 'users#token'

  get '/countries/:name', to: 'countries#display_country'

  get '/questions/get_trivia', to: 'questions#get_trivia'
end
