class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_error
    
end
