class User < ApplicationRecord
    has_many :favorites, dependent: :destroy
    has_many :services, through: :favorites

    has_secure_password
end
