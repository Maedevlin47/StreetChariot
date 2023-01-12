class ApplicationController < ActionController::API
    include ActionController::Cookies
    # rescue_from ActiveRecord::RecordInvalid, with: :authorize
    # before_action :authorize



    # rescue_from ActiveRecord::RecordInvalid, with: :authorize
    # rescue_from ActiveRecord::RecordInvalid, with: :invalid_error
    
    # private #########################################################################
    # def authorize 
    #     render json: {error: "Not authorized username or password"}, status: :unauthorized unless session.include? :user_id
    # end



end
