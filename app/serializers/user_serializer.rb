class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :birthdate, :city, :state, :password_digest
  has_many :favorites
  has_many :services
end
