import React from "react";
import {useEffect, useState} from "react";
import FavoritesPage from "./FavoritesPage";


function ServicesCard({service}) {

    const [favorites, setFavorites] = useState([])
    
    const [serviceFavitorites, setServiceFavitorites] = useState(false)

    function handleAddFavorite() {
        fetch('/favorites/add', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({ service_id: service.id }),

            }).then((response) => {
    
                if (response.ok) {
    
                response.json().then((data) => setFavorites([data, ...favorites]));
    
            }
    
            });
        }
        // function updateFavorites() {
        //     fetch(`service/${service.id}/favorite`, {
        //         method: "PATCH",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify({ favorites: --service.favorites }),
        //     })
        //     .then((response) => {
        //         if (response.ok) {
        //         setServiceFavitorites(false);
        //         }
        //     });
        //         } else 
        //         if (fetch(`/service/${service.id}/favorite`), {
        //                 method: "PATCH",
        //                 headers: { "Content-Type": "application/json" },
        //                 body: JSON.stringify({ favorites: ++service.favorites }),
        //             })
        //             .then((response) => {
        //                 (response.ok) {
        //                 setServiceFavitorites(true);
        //                 }
        //             });
        //         }
    
    
    return(
        <div className="services-page">
            <div>
                {service.key}
                {service.name}
                <a className="website" href={service.website} target= "_blank" > Click Here to their website!</a>
            <br />
                {service.travel_type}
            </div>
            <br />
            {/* <button classname= "add-favoriteon" onClick={() => {handleAddFavorite(service.id); updateFavorites(service.favorites)}}>
                    Favorite!
            </button> */}
            <br />
            <br />


            
        </div>
        
        );
    }

export default ServicesCard;



/* <button */
// className="add-favoriteon"
// onClick={() => {
// handleAddFavorite();
// setIsFavorited(!isFavorited);
// }}>
// {isFavorited ? "Unfavorite" : "Favorite"}
// </button>
// <br />












// const handleFavoriteClick = (serviceId) => {
//     fetch(`/services/${serviceId}`, {
//         method: 'PATCH',
//         body: JSON.stringify({ favorite: true }),
//         headers: { 'Content-Type': 'application/json' },
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             const updatedServices = allServices.map((service) => {
//                 if (service.id === serviceId) {
//                 return { ...service, favorite: true };
//                 }
//                 return service;
//         });
//         setAllServices(updatedServices);
//         })

//         .catch((error) => console.error(error));
//     };











    // const [allServices, setAllServices] = useState([]);

    // useEffect(() => {
    //     fetch("/services")
    //     .then((r) => r.json())
    //     .then(setAllServices);
    // }, []);






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