
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
service1 = Service.create(name: "Uber", travel_type: "Car Service", favorite: false, website:"https://www.uber.com/us/en/ride/", description: "Uber is one of the top car service apps out there, one of the reasons for this is because it is easy to use.", features: "Uber has different types of cars and rides for the user to select from.  The rider can select from - an Uber X, standard car ride, fits 4 passengers. Uber XL, fits 6 people.  Uber Black, luxury cars, fits 4.  Uber Comfort, newer cars with extra leg room, fits 4.  Uber Green, Eco-Friendly, fits 4.  Uber Pet, Affordable rides for you and your pet, fits 4 and a pet!", signup: "Go to the Uber 'Ride' page, linked above, you will need to enter an email or a phone number to start an account.  Once you do that you just need to follow the prompts to create your account.  If you sign up on a computer, go into your smartphone’s app store, download the Uber app for free, and then sign into the app using the email or phone number & password you just created!")
service2 = Service.create(name: "Lyft", travel_type: "Car Service", favorite: false, website:"https://www.lyft.com/rider", description: "Lyft is Uber's biggest competitor. Depending on your location you may find that one works better for you and you can always make an account on both platforms to compare the rates, wait times, driver, etc. in your area to see which suits you best!", features: "Lyft has different user car and transportation options, which include - Lyft Wait & Save, a budget friendly, private ride, for up to 4 passengers.  Lyft Shared, a budget friendly, shared ride, fits 4.  Lyft standard, efficient, private and fits 4.  Lyft Priority Pickup, fits 4.  Lyft Preferred Mode, roomier cars, fits 4. Lyft XL fits up to 6.  Lyft Lux, private luxury ride.  Lyft Rental, allows users to rent a car from Lyft rather than a car rental service.  Lyft Transit, allows you to find bus, train and ferry schedules through the Lyft app.  Lyft Bike & Scooters.", signup: "After going to the Lyft 'Ride' page, linked above, on the top of the page in the navigation bar, you will see a 'Sign Up' option. You will need to enter a phone number to start an account.  Then you will get a confirmation code texted to you.  Similar to Uber, you just need to follow the prompts to create your account.  Again, go on to your smartphone’s app store, download the Lyft app for free, and then sign into the app using the email or phone number & password you just created!")
service3 = Service.create(name: "Via", travel_type: "Shared Car Service", favorite: false, website:"https://ridewithvia.com/", description: "Via is the world’s most powerful digital platform for public transportation. Via is a care share service that offers other transportation services as well.  Via’s platform provides an end-to-end solution to plan, optimize, and operate efficient and equitable transit systems — unlocking opportunity for all, and building resilient cities for the future.", features: "Via transportation services include - Microtransit, a rideshare transit network for more affordable and accessible transportation.  Via Corporate and Campus Shuttles.  Via ParaTransit, provides affordable and compliant services for all medical conditions.  Via Planning, Scheduling and Consulting, for planning future rides for work needs.  Via’s Health Transportation, providing patients access to quality care, by getting them to doctors appointments without a worry.", signup: "Go to the Via 'Ride' page, linked above, review, then go into your smartphone’s app store, download the Lyft app for free, and then sign into the app using the email or phone number & password you just created!")
service4 = Service.create(name: "Yellow Cab", travel_type: "Car Service", favorite: false, website:"https://www.yellowcab.cab/app/", description: "With over 100 vehicles on the road, YellowCabCo. is the best solution for safe & reliable transportation in Central Iowa and the Greater Des Moines Metro area.", signup: "After going to the YellowCab webpage, linked above, you can either call, 515.282.8111, to create an account or order a car.  Go on to your smartphone’s app store, download the YellowCab app for free - you will select the 'rider' option and 'create account' and then you just need to follow the prompts to create your account!")
service5 = Service.create(name: "Revel", travel_type: "Car & Moped Service", favorite: false, website:"https://gorevel.com/", description: "Revel is a car and mopeds transit application.  Revel’ mission is to accelerate EV adoption by providing the infrastructure and services that make it easy to go electric.", features: "Revel’s features include - Revel RideShare, car ride that may be shared with another rider, more cost effective, fits 4.  Revel Standard, private ride, fits up to 4.  Revel Moped, rent a moped in your area to drive to your destination.", signup:"Go to the Revel 'Ride' page, linked above, and review, and then sign into the app using the email or phone number & password you just created!  From there, you will select the 'rider' option and 'create account' and then you just need to follow the prompts to create your account!")
service6 = Service.create(name: "Hitch", travel_type: "Car Service", favorite: false, website:"https://www.ridehitch.com/", description: "Hitch is a long distance rideshare, connecting riders and drivers heading to the same city. Hitch is like Uber, but for longer distances.  A much better way to travel between cities has arrived. Hitch connects riders and drivers headed to the same city in the most frictionless manner possible.", features: "Hitch has flexible options for every journey and guarantees affordable rides to the drop-off points. Use our Hitch economical station-to-station service for shared or private rides, customize your travel with door-to-door, or ride in comfort and space with Hitch XL.", signup: "Go to the Hitch webpage, linked above, and review, then into your smartphone’s app store, download the Hitch app for free, and then sign into the app using the email or phone number & password you just created! You then select the day, time, and ride type that best aligns with your needs. You can book anywhere from 60 days to 2 hours in advance.", signup: " After going to the Hitch webpage, linked above, and reviewing, go on to your smartphone’s app store, download the Hitch app for free, and then sign into the app using the email or phone number & password you just created!")
service7 = Service.create(name: "Transit", travel_type: "Train & Bus", favorite: false, website:"https://apps.apple.com/us/app/transit-subway-bus-times/id498151501", description: "Transit is your real-time urban travel companion. Navigate your city’s public transit system with accurate real-time predictions, simple trip planning, step-by-step navigation, service disruption notifications, and departure and stop reminders... all presented in a clear, bold interface. Public transport not cooperating? Easily request a ride from Uber, Lyft or VIA, or grab the closest bikeshare.", features: "Transit offers a variety of transportation services options and features -  A user can see real-time arrivals for nearby buses and trains instantly upon launch.  Watch your transit vehicle approaching on a map in real-time. Compare options with powerful A to B trip plans using real-time data.", signup: " After going to the Transit webpage, linked above, and reviewing, go on to your smartphone’s app store, download the Transit app for free, and then sign into the app using the email or phone number & password you just created!")
service8 = Service.create(name: "Amtrak", travel_type: "Train", favorite: false, website:"https://www.amtrak.com/home?cmp=pdsrch-Amtrak|Brand|Amtrak%20KW|Core%20DMA|Exact-google&gclid=Cj0KCQiAq5meBhCyARIsAJrtdr7PJsrcyA6nrszZjqCQprGQJVtHsG8C5EOLafGCtR2vNT5He_n-5lAaAoH9EALw_wcB&gclsrc=aw.ds", description: "Amtrak, the national rail operator, connects America in safer, greener and healthier ways. With 21,000 route miles in 46 states, the District of Columbia and three Canadian provinces, Amtrak operates more than 300 trains each day to more than 500 destinations.", signup: "Go to the Amtrak webpage, linked above, on the top of the page in the navigation bar, you will see a 'Join' option. You will need to enter the information listed under the 'Join' section to create an account.  Amtrak is equally web and mobile friendly for a user.  To book train rides on your phone, you will need to download the Amtrak app, again by searching and downloading it for free in your phone’ app store.")
service9 = Service.create(name: "Hopper", travel_type: "Flight & Rental Car", favorite: false, website:"https://hopper.com/", description: "Hopper is an accredited travel agency. They partner with airlines, hotels, homes, and car rental providers across the globe so users can feel confident when they are booking their perfect vacation.", features: "Hopper Car Rental, partners with top rental car companies to bring you low prices that you won’t find elsewhere.  Hopper features 180 distinct retail brands across the world and offers an award-winning mobile booking experience.  Rates are 20-25% cheaper when you book a rental car and many brands do not charge underage fees when you book on Hopper.",  signup: "A valid mobile phone number is required to set up and create an account, and must receive SMS texts in order for Hopper to complete the verification process. First you have to download the Hopper app from the app store, then open the Hopper app and head to your settings, then tap 'Sign Up or Log In'.  Next, just enter the phone number of the device you are currently using and you will receive an SMS message. Once they have confirmed your phone number, you can finish creating your account!")
service10 = Service.create(name: "Kiwi.com", travel_type: "Flight & Rental Car", favorite: false, website:"https://www.kiwi.com/en/user/login?redirectUrl=%2Fen%2Fuser", description: "Kiwi believes everyone should be free to experience the world and that there’s no greater freedom than choosing where you want to be and how you want to get there.  That’s why they are breaking down the barriers to low-cost travel, making the world open and accessible for all. ", features: "Kiwi’s self-transfer hack helps customers travel anywhere by connecting airlines and carriers that don’t usually cooperate with each other.", signup: "Go to the Kiwi webpage, linked above, on the top of the page in the navigation bar dropdown (3 lines), click into it.  You will get a side menu with the option to 'Sign in' or 'Create an Account'.  Click 'Create an Account'.  You will need to enter the information requested, including your email as your username. Kiwi is equally web and mobile friendly for a user.") 
service11 = Service.create(name: "SkyScanner", travel_type: "Flight & Car Rental", favorite: false, website:"https://www.skyscanner.com/", description: "Skyscanner allows users to explore the best flight deals from anywhere to everywhere, then book with no fees, Compare flight deals from over 1,000 providers, and choose the cheapest, fastest or greenest tickets, and Find the cheapest month, or even day, to fly, and set up Price Alerts to book when the price is right.", signup: "Setting up a Skyscanner account couldn’t be easier. Just click on the linked website above and then on the blue “Login” button in the top-right corner of the page. Then enter your email and you will be sent an email with instructions on finishing your account set up!")


puts "Created Services"




puts "Creating Favorites"

    11.times {Favorite.create(
        user: User.all.sample, 
        service: Service.all.sample )}


puts "Created Favorites"
puts "Done Seeding"





# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service2.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service3.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service4.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service5.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service6.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service7.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service8.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service9.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service10.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service11.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service5.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service4.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service7.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service2.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service11.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service8.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service6.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service3.id)
# Favorite.create(user_id: Faker::Number.between(from: 0, to: 10), service_id: service9.id)



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