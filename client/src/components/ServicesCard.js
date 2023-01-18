import React from "react";
import {useEffect, useState} from "react";
import FavoritesPage from "./FavoritesPage";


function ServicesCard() {
    
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch("/services")
        .then((r) => r.json())
        .then(setAllServices);
    }, []);

    const handleFavoriteClick = (serviceId) => {
    fetch(`/services/${serviceId}`, {
        method: 'PATCH',
        body: JSON.stringify({ favorite: true }),
        headers: { 'Content-Type': 'application/json' },
    })
        .then((response) => response.json())
        .then((data) => {
            const updatedServices = allServices.map((service) => {
                if (service.id === serviceId) {
                return { ...service, favorite: true };
                }
                return service;
        });
        setAllServices(updatedServices);
        })

        .catch((error) => console.error(error));
    };

    
    return(
        <ul className="services-page">
        {allServices.map((service) => {
            return (
            <div key={service.id}>
                {service.key}
                {service.name}
                <br />
                {service.travel_type}
                <br />
                <button onClick={() => handleFavoriteClick(service.id)}>
                    Favorite
                </button>
                <br />
                <br />
                <br />
            </div>
                );
            })}
            <div>
                <FavoritesPage services={allServices} />
            </div>
        </ul>
        
        );
    }

export default ServicesCard;




// function ServicesCard() {
    
//     const [allServices, setAllServices] = useState([])
    
//     useEffect(() => {
//         fetch("/services")
//         .then(r => r.json())
//         .then(setAllServices)
//     }, [])
    
//     console.log(allServices)
    
//     function handleFavorite(serviceId) {
//         fetch('/favorites', {
//             method: 'POST',
//             body: JSON.stringify({ service_id: serviceId }),
//             headers: { 'Content-Type': 'application/json' },
//         })
    
//             .then((response) => {
//             console.log(response);

//         })
//             .catch((error) => {
//                 console.error('Error:', error);
//         });
//     }

    
//     return(
//         <ul className="services-page">
//         {allServices.map((service) => {
//             return (
//             <div>
//                 {service.key}
//                 {service.name}
//                 <br />
//                 {service.travel_type}
//                 <br />
//                 <button className="favservicebutton" onClick={() => handleFavorite(service.id)}>
//                     {service.liked ? 'Unfavorite' : 'Favorite'}
//                 </button>
//                 <br />
//                 <br />
//                 <br />
//             </div>
//                 );
//             })}
//         </ul>
//         );
// }

















// function ServicesCard() {
    
//     const [allServices, setAllServices] = useState([])
    
//     useEffect(() => {
//         fetch("/services")
//         .then(r => r.json())
//         .then(setAllServices)
//     }, [])
    
//     console.log(allServices)
    
    
//     return(
//         <ul className="services-page">
//         {allServices.map((service) => {
//             return (
//             <div>
//                 {service.key}
//                 {service.id}
//                 {service.name}
//                 {service.travel_type}
//                 {service.liked}
//             </div>
//                 );
//             })}
//         </ul>
//         );
// }


















// function ServicesCard({user}) {
//     const [allServices, setAllServices] = useState([]);

//     useEffect(() => {
//         fetch("/services")
//         .then(r => r.json())
//         .then(setAllServices)
//     }, []);

//     function handleFavorite(serviceId) {
//         fetch('/favorites', {
//             method: 'POST',
//             body: JSON.stringify({ service_id: serviceId }),
//             headers: { 'Content-Type': 'application/json' },
//         })
//             .then((response) => {
//                 console.log(response);
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     }

//     return(
//         <ul className="services-page">
//             {allServices.map((service) => {
//                 return (
//                     <div>
//                         {service.key}
//                         {service.name}
//                         <br />
//                         {service.travel_type}
//                         <button onClick={() => handleFavorite(service.id)}>
//                             Favorite
//                         </button>
//                         <br />
//                         <br />
//                         <br />
//                     </div>
//                 );
//             })}
//         </ul>
//     );
// }





// export default ServicesCard;

/* {showServices = allServices.map((serviceObj) => {
        
        return (
            <p>key={allServices.id}</p>
                <p>name={allServices.name}</p>
                <p>travel_type={allServices.travel_type}</p>
                <p>liked={allServices.liked}</p>
        </div> */

        // function ServicesCard() {
    
        //     const [allServices, setAllServices] = useState([])
            
        //     useEffect(() => {
        //         fetch("/services")
        //         .then(r => r.json())
        //         .then(setAllServices)
        //     }, [])
            
        //     console.log(allServices)
            
        //     function handleFavorite(serviceId) {
        //         fetch('/favorites', {
        //             method: 'POST',
        //             body: JSON.stringify({ service_id: serviceId }),
        //             headers: { 'Content-Type': 'application/json' },
        //         })
            
        //             .then((response) => {
        //             console.log(response);
        
        //         })
        //             .catch((error) => {
        //                 console.error('Error:', error);
        //         });
        //     }
        
            
        //     return(
        //         <ul className="services-page">
        //         {allServices.map((service) => {
        //             return (
        //             <div>
        //                 {service.key}
        //                 {service.name}
        //                 <br />
        //                 {service.travel_type}
        //                 <button onClick={() => handleFavorite(service.id)}>
        //                     {service.liked ? 'Unfavorite' : 'Favorite'}
        //                 </button>
        //                 <br />
        //                 <br />
        //                 <br />
        //                 <FavoritesPage allServices= {allServices} />
        //             </div>
        //                 );
        //             })}
        //         </ul>
        //         );
        // }