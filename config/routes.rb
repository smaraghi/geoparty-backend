Rails.application.routes.draw do

  resources :users, only: [:create, :update]

  post '/login', to: 'auth#create'
  get '/verify_token', to: 'users#token'

  get '/countries/:name', to: 'countries#display_country'
  get '/questions/get_trivia', to: 'questions#get_trivia'
end
