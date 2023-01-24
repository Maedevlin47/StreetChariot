class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :service_id
  has_one :user
  has_one :service
end
