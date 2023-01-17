// import {React, useEffect, useState} from "react";
import React from "react";
import ServicesCard from "./ServicesCard";


function ServicesPage({user}) {
    




    
    return (  
        <div className="services-page">
            <ServicesCard />

        </div>
    );
}

export default ServicesPage;



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

// return (
//     <div key={service.id}>
//     <p>{service.name}</p>
//     <p>{service.travel_type}</p>
//     <p>{service.liked}</p>
// </div>
// )
// })
    
    
    
    
//         <div>
//         key={serviceObj.id} 
//         serviceObj = {serviceObj}
//         travel_type = {serviceObj.travel_type}
//         liked = {serviceObj.liked}
//         </div>
//     )

// })