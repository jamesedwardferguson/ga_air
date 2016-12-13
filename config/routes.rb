Rails.application.routes.draw do

  root 'pages#home'
  get '/home' => 'pages#home'

  get "/login" => "sessions#new", as: :login
  post "/login" => "sessions#create"
  delete "/login" => "sessions#destroy"

  get "/search" => "reservations#home"
  resources :users do
    resources :reservations
  end

  resources :airplanes do
   resources :flights
  end
end
