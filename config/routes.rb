Rails.application.routes.draw do
  resources :services, only: [:index, :create, :show, :update] 
  resources :favorites, only: [:index, :destroy, :create, :update]
  resources :users, only: [:index, :destroy, :show, :create, :update]

  # do 
  #   resources :favorites, only: [:create]
  # end
  # resources :users, only: [:index, :create, :show, :update]

  #signup routes
  get "/users", to: "users#index"

  get "/users/:id", to: "users#show"
  
  post "/signup", to: "users#create"

  #login/out routes

  get "/user_logged_in", to: "login_session#show"
  
  post "/login", to: "login_session#create"
  
  delete "/logout", to: "login_session#destroy"
  
  # post "/favorites", to: "services#post"

  post  '/favorites/add', to: 'favorites#create'

  delete "/favorites", to: 'favorites#destroy'
  
  update  "/user/:id", to: 'users#update'


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end

  # patch '/services/:id', to: 'services#update'

  #Services routes

  # get "/services", to: "services#index"

  # get "/services/:id", to: "services#show"