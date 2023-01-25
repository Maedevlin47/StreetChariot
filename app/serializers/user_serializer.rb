class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :birthdate, :city, :state, :favoriteTotal
  has_many :favorites
  has_many :services

  def favoriteTotal
    "Number Of Favorites: #{self.object.numOfFavorites}"
  end

end
