Rails.application.routes.draw do

  root 'pages#home'
  get '/home' => 'pages#home'

  get "/login" => "sessions#new", as: :login
  post "/login" => "sessions#create"
  delete "/login" => "sessions#destroy"

  get "/search" => "flights#home"
  resources :users
  resources :reservations

  resources :airplanes
  resources :flights

end
