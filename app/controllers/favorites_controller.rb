import React from "react";


class FavoritesController < ApplicationController
    
    def index
        self.favorite_services = current_user.services.where(favorite: true)
    end

    def create
        favorite = Favorite.new(favorite_params)
        favorite.user = @current_user
        favorite.save 
        render json: favorite.restaurant, status: :created     
    end
    
    private################################################################
    
    def favorite_params
        params.permit(:restaurant_id)
    end
end
    
    
        # def create
    #     self.service = Service.find(params[:id])
    #     current_user.services << @service
    #     redirect_to services_path
    # end
    
        # def index
    #     @services = Service.where(favorite: true)
    #     render json: @services
    # end
    
            # def create
        #     service = Service.find(params[:service_id])
        #     current_user.favorites << service
        #     if current_user.save
        #         render json: { message: "Service added to favorites" }, status: :created
        #     else
        #         render json: { error: current_user.errors.full_messages }, status: :unprocessable_entity
        #     end
        # end
        
        # def destroy
        #     favorite = Favorite.find(params[:id])
        #     if favorite.user == current_user
        #         favorite.destroy
        #         render json: { message: "Service removed from favorites" }, status: :ok
        #     else
        #         render json: { error: "Unauthorized" }, status: :unauthorized
        #     end
        # end
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
#     before_action :authenticate_user!

#     def index
#         self.services = current_user.favorites
#         render json: @services
#         end
#     end

#     def destroy
#         favorite = Favorite.find_by(id: params[:id], user: current_user)
#         if favorite
#             favorite.destroy
#             render json: { message: "Successfully unfavorited" }, status: :ok
#         else
#             render json: { message: "favorite not found" }, status: :not_found
#         end
#     end
# end
