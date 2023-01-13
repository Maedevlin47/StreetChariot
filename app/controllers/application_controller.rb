class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :authorize_login
    before_action :authorize_login
    rescue_from ActiveRecord::RecordInvalid, with: :authorize_login
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_error
    
    private #########################################################################
    def authorize_login 
        render json: {error: "Not authorized username or password"}, status: :unauthorized unless session.include? :user_id
    end

    def invalid_error error
        render json: {"errors": error.record.errors.full_messages}, status: :unprocessable_entity
    end


end
