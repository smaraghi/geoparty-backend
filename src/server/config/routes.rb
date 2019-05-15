Rails.application.routes.draw do
  get '/countries/:name', to: 'countries#display_country'
  resources :countries
end
