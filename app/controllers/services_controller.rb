class ServicesController < ApplicationController
    # skip_before_action :authorize_login, only: [:index]
    
        def index
            services = Service.all
            render json: services
        end
    
        def show
            service = Service.find_by_id(params[:id])
            if service
                render json: service
            else 
                render json: {"error": "No service found"}, status: :not_found
            end
        end

        def update 
            service = Service.find_by_id(params[:id])
            if service
                service.update(favorite)
                render json: service
            else
                render json: {error: 'Service not found'}, status: :not_found
            end
        end


    private #################################################################################################

    private
    def service_params
        params.permit(:name, :travel_type, :favorite, :website)
    end
    
    def favorite
        params.permit(:favorite)
    end

end
    








# def update
#     @service = Service.find(params[:id])
#     if @service.update(favorite_params)
#         render json: @service
#     else
#         render json: { errors: @service.errors }, status: :unprocessable_entity
#     end
# end



# def favorite_params
#     params.permit(:favorite)
# end










#     skip_before_action :authorize_login, only: [:index]

#     def index
#         services = Service.all
#         render json: services
#     end

#     def show
#         services = Service.find_by_id(params[:id])
#         if event
#             render json: service
#         else 
#             render json: {"error": "No event found"}, status: :not_found
#         end
#     end

#     def create
#         service = Service.find(params[:service_id])
#         current_user.favorites << service
#         if current_user.save
#             render json: { message: "Service added to favorites" }, status: :created
#         else
#             render json: { error: current_user.errors.full_messages }, status: :unprocessable_entity
#         end
#     end
    
#     def index
#         self.services = current_user.favorites
#     end
# end