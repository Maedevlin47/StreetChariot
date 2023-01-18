
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

service1 = Service.create(name: "Uber", travel_type: "Car Service", favorite: "false", website:"https://www.uber.com/us/en/s/d/kochab/?ad_id=619191986118&adg_id=139968575959&campaign_id=18209768604&cre=619191986118&dev=c&dev_m=&fi_id=&gclid=Cj0KCQiAq5meBhCyARIsAJrtdr4X1Qx7O8LR0SYBZwFZPfQV3t5b1hkA1CbCXWukMqUo-_SoQ2jiNGwaAg6eEALw_wcB&gclsrc=aw.ds&kw=uber&kwid=kwd-12633382&match=b&net=g&placement=&tar=&utm_campaign=CM2200161-search-google-brand_1_-99_US-National_o-d_web_acq_cpc_en_T3_Generic_BM_uber_kwd-12633382_619191986118_139968575959_b_c&utm_source=AdWords_Brand")
service2 = Service.create(name: "Lyft", travel_type: "Car Service", favorite: "false", website:"https://www.lyft.com/")
service3 = Service.create(name: "Via", travel_type: "Car Service", favorite: "false", website:"https://ridewithvia.com/")
service4 = Service.create(name: "Yellow Cab", travel_type: "Car Service", favorite: "false", website:"https://www.yellowcab.cab/app/")
service5 = Service.create(name: "Revel", travel_type: "Car Service", favorite: "false", website:"https://gorevel.com/")
service6 = Service.create(name: "Hitch", travel_type: "Car Service", favorite: "false", website:"https://www.ridehitch.com/")
service7 = Service.create(name: "Transit", travel_type: "Train & Bus", favorite: "false", website:"https://apps.apple.com/us/app/transit-subway-bus-times/id498151501")
service8 = Service.create(name: "Amtrak", travel_type: "Train", favorite: "false", website:"https://www.amtrak.com/home?cmp=pdsrch-Amtrak|Brand|Amtrak%20KW|Core%20DMA|Exact-google&gclid=Cj0KCQiAq5meBhCyARIsAJrtdr7PJsrcyA6nrszZjqCQprGQJVtHsG8C5EOLafGCtR2vNT5He_n-5lAaAoH9EALw_wcB&gclsrc=aw.ds")
service9 = Service.create(name: "MTA", travel_type: "Train & Bus", favorite: "false", website:"https://new.mta.info/")
service10 = Service.create(name: "Hopper", travel_type: "Flight & Rental Car", favorite: "false", website:"https://hopper.com/")
service11 = Service.create(name: "Kiwi.com", travel_type: "Flight & Rental Car", favorite: "false", website:"https://www.kiwi.com/en/?origin=--&destination=--&outboundDate=2023-01-18_2023-02-17&inboundDate=no-return&lang=en&utm_source=google&utm_medium=cpc&utm_campaign=10429299996&utm_content=brand&mkt_agency=adwordssearch&mkt_form=acquisition&user_id=075c5c42ac16a7d4ef72c8c78e361e08&affilid=acquisition000brand000sem&mkt_origin=&si=_&mkwid=sN5HLUM1t-dc_pcrid_544897781993_pkw_kiwi+travel_pmt_e_slid__&pgrid=103619538956&ptaid=aud-425340316926%3Akwd-322345930685&paid_traffic_source=1&gclid=Cj0KCQiAq5meBhCyARIsAJrtdr5LPZ6TwFRQKWkns8BctHeTkX6Nzv4n6TW7FKxIWjhPtyLEtnHkiN0aApBkEALw_wcB&session_token=EyT1AfIh5662NjCn452d55dzqndqEF1HTBDm%2FP9ZS9IdoHUNs24IDLMvad5BbCEZN219Y74HXJqGNGh7Ojk5gfKjWCxTc72dzpaZ2L4b2Jjhg8YuFNaiOxG7tpK1X%2Bx6&session_identifier=YbBk9Zoa8kzQyPJPaEDvG9ds5%2Bazz9t8vsNCU5jE5sg%3D&deeplinkId=28625850091")
service12 = Service.create(name: "Kayak", travel_type: "Flight & Rental Car", favorite: "false", website:"https://www.kayak.com/stays?lang=en&skipapp=true&gclid=Cj0KCQiAq5meBhCyARIsAJrtdr406oo07Enkal9hZ-pVSwCFTODXppTMFlowHytpHra-hrEswZpNff8aArzHEALw_wcB&g_kw=kayak&aid=103175289976")
service13 = Service.create(name: "SkyScanner", travel_type: "Flight", favorite: "false", website:"https://www.skyscanner.com/")

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
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service7.id)
Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service9.id)
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