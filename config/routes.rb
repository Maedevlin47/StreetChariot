Rails.application.routes.draw do
  resources :services, only: [:index, :create, :show, :update] 
  resources :favorites, only: [:index, :destroy, :create, :update]
  resources :users



  get "/users/:id", to: "users#show"
  
  post "/signup", to: "users#create"


  get "/user_logged_in", to: "login_session#show"
  
  post "/login", to: "login_session#create"
  
  delete "/logout", to: "login_session#destroy"
  

  post  '/favorites/add', to: 'favorites#create'

  delete "/favorites", to: 'favorites#destroy'
  

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end

  # patch '/services/:id', to: 'services#update'

  #Services routes

  # get "/services", to: "services#index"

  # get "/services/:id", to: "services#show"