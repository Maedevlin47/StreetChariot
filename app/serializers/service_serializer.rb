class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :travel_type, :liked
  has_many :favorites
end
