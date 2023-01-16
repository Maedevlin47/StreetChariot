
puts "Clearing DB"

User.destroy_all
Favorite.destroy_all
Service.destroy_all

puts "DB cleared!"


puts "Creating Users"

10.times {User.create(
    name: Faker::Name.unique.name, 
    username: Faker::Internet.username(specifier:7),
    birthdate: Faker::Date.birthday(min_age: 18, max_age: 100), 
    city: Faker::Address.city,
    state: Faker::Address.state_abbr,
    password: "1")}

puts "Creating Services"

service1 = Service.create(name: "Uber", travel_type: "Car Service")
service2 = Service.create(name: "Lyft", travel_type: "Car Service")
service3 = Service.create(name: "Via", travel_type: "Car Service")
service4 = Service.create(name: "Yellow Cab", travel_type: "Car Service")
service5 = Service.create(name: "Gojek", travel_type: "Car Service")
service6 = Service.create(name: "Revel", travel_type: "Car Service")
service7 = Service.create(name: "Hitch", travel_type: "Car Service")
service8 = Service.create(name: "Transit", travel_type: "Train & Bus")
service9 = Service.create(name: "Amtrak", travel_type: "Train")
service10 = Service.create(name: "MTA", travel_type: "")
service11 = Service.create(name: "Metro Transit", travel_type: "Train & Bus")
service12 = Service.create(name: "Hopper", travel_type: "Flight")
service13 = Service.create(name: "Kiwi.com", travel_type: "Flight")
service14 = Service.create(name: "Kayak", travel_type: "Flight")
service15 = Service.create(name: "SkyScanner", travel_type: "Flight")

puts "Created Serice"


puts "Creating Favorites"

Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service1.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service2.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service3.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service4.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service5.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service6.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service7.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service8.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service9.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service10.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service11.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service12.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service13.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service14.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service15.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service11.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service8.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service6.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service3.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service5.id)

puts "Created Favorite"



puts "Done Seeding"

# Favorite.create(user_id: user2.id, service_id: service2.id)
# Favorite.create(user_id: user3.id, service_id: service3.id)
# Favorite.create(user_id: user4.id, service_id: service4.id)
# Favorite.create(user_id: user5.id, service_id: service5.id)
# Favorite.create(user_id: user6.id, service_id: service6.id)
# Favorite.create(user_id: user7.id, service_id: service7.id)
# Favorite.create(user_id: user8.id, service_id: service8.id)
# Favorite.create(user_id: user9.id, service_id: service9.id)
# Favorite.create(user_id: user10.id, service_id: service10.id)
# Favorite.create(user_id: user3.id, service_id: service11.id)
# Favorite.create(user_id: user2.id, service_id: service12.id)
# Favorite.create(user_id: user1.id, service_id: service13.id)
# Favorite.create(user_id: user4.id, service_id: service14.id)
# Favorite.create(user_id: user5.id, service_id: service15.id)
# Favorite.create(user_id: user6.id, service_id: service16.id)
# Favorite.create(user_id: user7.id, service_id: service17.id)
# Favorite.create(user_id: user8.id, service_id: service18.id)
# Favorite.create(user_id: user9.id, service_id: service3.id)
# Favorite.create(user_id: user10.id, service_id: service5.id)