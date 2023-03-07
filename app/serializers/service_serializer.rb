class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :travel_type, :favorite, :website, :description, :signup, :features
  has_many :favorites
  has_many :users

end
