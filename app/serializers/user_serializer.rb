class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :birthdate, :city, :state, :password_disgest
end
