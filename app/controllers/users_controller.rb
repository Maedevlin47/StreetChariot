class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def index
        render json: User.all
    end
    

    def create
        user = User.create!(user_params)
    if user.valid?
        session[:user_id] = user.id
        render json: user
    else
=       render json: {error: "User not found"}, status: :not_found status: :unprocessable_entity
        end
    end
    
    
    def show
        user = User.find_by(id: session[:user_id])
    if user
        render json: user, status: :ok
    else 
        render json: {error: "User Not Found"}, status: :not_found
        end
    end
        
    private########################################################################
    
        def user_params
            params.permit(:name, :username, :birthdate, :city, :state, :password_confirmation)
        end
    
end
