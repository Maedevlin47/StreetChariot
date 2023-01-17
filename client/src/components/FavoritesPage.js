import { useState, useEffect } from 'react';

function FavoritesPage() {
        const [favorites, setFavorites] = useState([]);
    
        useEffect(() => {
            fetch("/favorites")
            .then(r => r.json())
            .then(setFavorites)
        }, []);
    

        function handleUnfavorite(favoriteId) {
            fetch(`/favorites/${favoriteId}`, {
                method: 'DELETE',
            })
                .then((response) => {
                    if (response.ok) {
                        setFavorites(favorites.filter(f => f.id !== favoriteId));
                    } else {
                        console.error('Error:', response);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
        return(
            <ul className="favorites-page">
                {favorites.map((favorite) => {
                    return (
                        <div>
                            {favorite.service.key}
                            {favorite.service.name}
                            <br />
                            {favorite.service.travel_type}
                            <button onClick={() => handleUnfavorite(favorite.id)}>
                                Unfavorite
                            </button>
                            <br />
                            <br />
                            <br />
                        </div>
                    );
                })}
            </ul>
        );
    }    

export default FavoritesPage;

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