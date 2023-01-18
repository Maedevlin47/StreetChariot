class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :travel_type, :favorite, :website
  has_many :favorites
end
