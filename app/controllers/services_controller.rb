class ServicesController < ApplicationController
    # skip_before_action :authorize_login, only: [:index]

    def index
        services = Service.all
        render json: services
    end

    def show
        service = Service.find_by_id(params[:id])
        if event
            render json: service
        else 
            render json: {"error": "No event found"}, status: :not_found
        end
    end
    
end
