import React from "react";
import FavoritesPage from "./FavoritesPage";
// import { Link } from "react-router-dom";
// import ServicesCard from "./ServicesCard";
// import { useState} from "react";


function ServicesPage({user, setUser, service, services, favorites , setFavorites}) {
    console.log(services)

    // const [favorites, setFavorites] = useState(user ? user.services : []);
    


    function handleClick (service) {
        console.log(service)
        fetch ("/favorites", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                user_id: user.id,
                service_id: service.id
            })
        }) 
        .then((r) =>{
            if (r.ok) {
                r.json().then((data) => {
                    setFavorites([data, ...favorites])
                } )
            } else {
                r.json().then((bad) => {
                    console.warn(bad)
                })
            }
        })
    }
    

    
        const serviceList = services.map((service) => {
                return (
                    <div key={service.id}>
                        <p>{service.name}</p>
                        <p>{service.travel_type}</p>
                        <a href= {service.website}>{service.name} Website </a>
                        <br />
                        {/* <button className = "markfavorited" onClick = {() => {updateRead(serviceData)}}>Viewed</button> */}
                    <div>
                        <button onClick = {() => {handleClick(service)} }>Add to favorites</button>
                    </div>
                    </div>

                )
            })
    return ( 

        <div className="services-page">
            <h1>
            {serviceList}
            </h1>
            <FavoritesPage 
            serviceList = {serviceList}
            favorites = {user ? user.services : []} 
            />
        </div>
    )
}

export default ServicesPage;


    // function handleDeleteFavorite(id) {
    //         const updateFavoriteArray = favorites.filter(
    //             (favorite) => favorite.id !== id
    //             );
    //         setFavorites(updateFavoriteArray);
    //     }
// handleDeleteFavorite = {handleDeleteFavorite}

/* <ServicesCard serviceList = {serviceList} ></ServicesCard> */


// {
//     setAllServices.length > 0 && setAllServices.map((service) => (<ServicesCard key={service.id} user={user} AetAllServices={setAllServices} />))
//     }

// allServices.map(service => <ServicesCard key={service.id} service={service} user={user} allServices={allServices}/>)





    // // const [allServices, setAllServices] = useState([])
    // const showServices = allServices.map((serviceObj) => {

// {allServices.services.map((service) => {
//     return (
//         <div key={service.id}>
//             <p>{service.name}</p>
//             <p>{service.travel_type}</p>
//             <p>{service.liked}</p>
//         </div>
//     )
//     })}


    
    
    
    
//         <div>
//         key={serviceObj.id} 
//         serviceObj = {serviceObj}
//         travel_type = {serviceObj.travel_type}
//         liked = {serviceObj.liked}
//         </div>
//     )

// })

// const serviceList = allServices.map((service,i) => {
//     return (
//     <div key={service.id}>
//     <p>{service.name}</p>
//     <p>{service.travel_type}</p>
//     <p>{service.liked}</p>
// </div>
// )
// })


    // const [serviceData, setServiceData] = useState(service)

    // const headers = {
    //     Accept: "application/json",
    //         "Content-Type" : "application/json"}