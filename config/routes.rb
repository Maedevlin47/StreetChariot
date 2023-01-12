Rails.application.routes.draw do
  resources :favorites
  resources :services
  # resources :users, only: [:index, :create, :show, :update]

  get "/users", to: "users#index"

  get "/users/:id", to: "users#show"
  
  post "/signup", to: "users#create"


  get "/user_logged_in", to: "login_session#show"
  
  post "/login", to: "login_session#create"
  
  delete "/logout", to: "login_session#destroy"

  
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
