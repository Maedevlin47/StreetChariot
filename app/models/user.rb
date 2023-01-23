class User < ApplicationRecord
    has_many :favorites, dependent: :destroy
    has_many :services, through: :favorites
    
    validates :username, presence: true, uniqueness: true
    has_secure_password


end
