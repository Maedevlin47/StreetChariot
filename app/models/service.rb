class Service < ApplicationRecord
    has_many :favorites, dependent: :destroy
    has_many :users, through: :favorites
    attr_accessor :description
    attr_accessor :signup
    attr_accessor :features
end
