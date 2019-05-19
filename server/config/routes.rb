Rails.application.routes.draw do

  resources :users, only: [:create]

  post '/login', to: 'auth#create'
  get '/verify_token', to: 'users#token'

  get '/countries/:name', to: 'countries#display_country'
  get '/questions/get_trivia', to: 'questions#get_trivia'
  post '/users/get_score', to: 'users#get_score'
end
