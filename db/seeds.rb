# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Clearing DB"
User.destroy_all
Favorite.destroy_all
Service.destroy_all
puts "DB cleared!"

puts "Creating Users"
10.times {User.create(
    name: Faker::Celebrity::Name.full_name, 
    username:Faker::Name.first_name, 
    birthdate: Faker::Date.between(from: '1930-01-01', to: '2023-01-01'), 
    city: Faker::City.city_name,
    state: Faker::State.state_abbr,
    password: "1")}





puts "Creating Services"
service1 = Service.create(name: "Uber", travel_type: "Car Service")





puts "Creating Favorites"