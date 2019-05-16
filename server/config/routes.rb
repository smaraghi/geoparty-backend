Rails.application.routes.draw do

  get '/countries/:name', to: 'countries#display_country'

  get '/questions/get_trivia', to: 'questions#get_trivia'
end
