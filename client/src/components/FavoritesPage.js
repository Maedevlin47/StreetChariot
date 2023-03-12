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
        <div class=" mx-18 min-h-screen text-l p-0 bg-rose-200 items-center justify-center font-['Quicksand'] pb-20">

            <div className ="pt-5 pb-3 font-bold text-4xl text-gray-900 text-center"> {user &&`${user.name}`}'s Favorites!</div>
            <div>
                <FavPic class= "lg:block"></FavPic>
            </div> 
            <div className="container mx-auto bg-rose-100 max-w-l w-full rounded-l-lg">
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



