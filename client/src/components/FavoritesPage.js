// import React, { useState } from "react";
import FavPic from './FavPic';


const headers = {
    Accept: "application/json",
        "Content-Type" : "application/json"}


function FavoritesPage({ user, favorites, handleRemoveFavorite }) {
    

    function handleDelete(user, service) {
        handleRemoveFavorite(service.id);

        fetch("/favorites", {
            method: "DELETE",
            headers,
            body: JSON.stringify({
                user: user,
                service: service,
            }),
        }).then((response) => {
            if (response.ok) {
                handleRemoveFavorite(service.id);
            }
        });
    }


    return (
        <body>
        <div class=" mx-18 min-h-screen text-l p-0 bg-rose-300 items-center justify-center font-['Quicksand'] pb-20">

            <div className ="pt-5 pb-3 font-bold text-4xl text-gray-900 text-center"> {user &&`${user.name}`}'s Favorites!</div>
            <div>
                <FavPic class= "lg:block"></FavPic>
            </div> 
            <div className="container mx-auto bg-rose-200 max-w-l w-full rounded-l-lg">
                {favorites.map((service, index) => {
                return (
                    <div>
                        <br />
                        <div className="pl-20 grid grid-cols-4 gap-20 gap-y-10 text-l pb-20 pt-20 pr-20" key={index}>
                            <p class ="font-bold text-3xl text-center text-rose-500">{service.name}</p>
                            <a class = "font-bold text-xl link link-primary" href={service.website}>{service.name} Website </a>
                            <p class = "font-bold text-xl">{service.travel_type}</p>
                        <div class="md:col-span-5 text-center animate-bounce w-3 h-3 text-justify">
                            <div class="btn-circle btn-horizontal w-60 inline-block bg-rose-800 text-lg">
                                <button class ="justify-right text-xl opacity-100 hover:opacity-30 text-white pt-2 py-py px-4"
                                    onClick = {() => handleDelete(user, service)}> Remove Favorite
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                );
            })}
            </div>
            </div>
        </body>
    );
}

export default FavoritesPage;



                /* <button className="readfav" onClick={() => handleMarkCompleted (service.id)} > Mark as Read! </button> */



// {user.id === service.user_id ? ( 
//     <button 
//         className="deletefav"
//         onClick={() => handleDelete(service.id)} > Remove from Favorites
//     </button>
// ) : null }


// {handleDelete ? "Remove From Favorites" : "Removed From Favorites"} 

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



            // function updateRead() {
    //     fetch("/services", {
    //         method: "PATCH",
    //         headers,
    //         body: JSON.stringify( favorites ? "read" : "need to read" ),
    //         })
    //     .then((r) => r.json())
    //     .then((data) => {
    //             setServiceData({ ...data });
    //         });
    //     }
    //     console.log(setServiceData)




        // const [serviceReviewData, setServiceReviewData] = useState([])
    
    // console.log(serviceReviewData)

    // const handleMarkCompleted = async (id) => {
    //         try {
    //         const response = await fetch(`/api/services/${id}`, {
    //             method: 'PATCH',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ status: 'completed' })
    //         });
    //         const updatedServices = await response.json();
    //             setServiceReviewData(updatedServices);
    //             } catch (error) {
    //             console.error(error);
    //             }
    //         };