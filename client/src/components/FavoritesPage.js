// import React, { useEffect } from "react";
// import {useState} from "react";
// import { id } from "date-fns/locale";
import React from "react";
// import { useParams } from "react-router-dom";

const headers = {
    Accept: "application/json",
        "Content-Type" : "application/json"}


function FavoritesPage({ user, service, servicesList, favorites = [], handleRemoveFavorite }) {
    
    function handleDelete(user, service) {
        handleRemoveFavorite(service.id);

        fetch("/favorites", {
            method: "DELETE",
            headers,
            body: JSON.stringify({
                user: user,
                service: service,
            }),
        });
    }


    return (
        <div className="favoritespage">
            {favorites.map((service) => {
            return (
                <div className="favoriteslist" key={favorites.id}>
                    <p>{service.name}</p>
                    <a href= {service.website}>{service.name} Website </a>
                    <p>{service.travel_type}</p>
                <br />
                <button 
                    className="deletefav"
                    onClick={() => handleDelete(user, service)} >
                        {handleDelete ? "Remove From Favorites" : "Removed From Favorites"} 
                </button>
                </div>
            );
        })}
        </div>
    
    );
}

export default FavoritesPage;


    // const [user, setUser] = useState({ favorites: [], services: [] });
    // const [favorited, setFavorited] = useState (false)
    // const favoriteSers = 

    // };
    
    
    
    // function FavoritesPage({user, servicesList, setFavorites, favorites =[], handleDeleteFavorite}) {

    
    // if(!services) return null;

    // const favoriteServices = services.filter((service) => service.favorite === true);


// function handleUnfavorite(serviceId) {
//     fetch(`/favorites/${serviceId}`, {
//         method: 'DELETE',
//     })
//     .then((response) => {
//         console.log(response);
//         const newServices = services.filter((service) => service.id !== serviceId);
//         setServices(newServices);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// }


                /* <button onClick={() => handleUnfavorite(service.id)}>Unfavorite</button> */





                // useEffect(() => {
                //     fetch('/favorites')
                //         .then((response) => response.json())
                //         .then((services) => {
                //         setServices(services);
                //         })
                //     .catch((error) => {
                //             console.error('Error:', error);
                //         });
                // }, []); //empty array passed as second parameter makes the effect only run once on mount.
            
                //     return (
                //         <div>
                //         {services.map((service) => (
                //         <div key={service.id}>
                //             <p>{service.name}</p>
                //         </div>
                //         ))}
                //     </div>
                //     );
                // }




            //     const [favorites, setFavorites] = useState([]);
    
            //     useEffect(() => {
            //         fetch("/favorites")
            //         .then(r => r.json())
            //         .then(setFavorites)
            //     }, []);
            
        
            //     function handleUnfavorite(favoriteId) {
            //         fetch(`/favorites/${favoriteId}`, {
            //             method: 'DELETE',
            //         })
            //             .then((response) => {
            //                 if (response.ok) {
            //                     setFavorites(favorites.filter(f => f.id !== favoriteId));
            //                 } else {
            //                     console.error('Error:', response);
            //                 }
            //             })
            //             .catch((error) => {
            //                 console.error('Error:', error);
            //             });
            //     }
            //     return(
            //         <ul className="favorites-page">
            //             {favorites.map((favorite) => {
            //                 return (
            //                     <div>
            //                         {favorite.service.key}
            //                         {favorite.service.name}
            //                         <br />
            //                         {favorite.service.travel_type}
            //                         <button onClick={() => handleUnfavorite(favorite.id)}>
            //                             Unfavorite
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
        

             // const headers = {
    // Accepts: "application/json",
    // "Content-Type": "application/json",
        // };
    // 
    // function handleDeleteFavorite(id) {
    //     const updateFavoriteArray = favorites.filter(
    //     (favorite) => favorite.id !== id
    //     );
    //     setFavorites(updateFavoriteArray);
    
        
    //     fetch(`/favorites/`, {
    //         method: "DELETE",
    //         // headers:{"Content-Type": "application/json"},
    //         body: JSON.stringify({
    //             user: user,
    //             service: service,
    //         }),
    //     });
    // }
        // useEffect(() => {
        //     setFavorites(getFavorites());
        // },[]);