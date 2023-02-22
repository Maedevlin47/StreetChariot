// import * as React from 'react';
// import Card from '@material-ui/core/Card';

// import { Link } from "react-router-dom";

function ServicesPage({user, setUser, service, services, favorites , setFavorites}) {
    console.log(services)

    
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
                    setUser({...user, services: [...user.services, data]})
                    // copy of the array and adding to the new copy
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
                <div class = "" key={service.id}>
                    <br />
                        <div class ="font-bold text-3xl text-center underline decoration-4 underline-offset-2 text-red-400">{service.name}</div>
                        <br/>
                        <ul class="list-disc">
                            <li class ="font-bold text-2xl">{service.travel_type}</li>
                            <br />
                            <li class ="font-bold text-2xl link link-primary" href= {service.website}>Website!</li>
                            <br />
                        </ul>
                        <br />
                        <div class ="font-bold text-2xl">Description of how to set up an account</div>
                        <br />
                        <div class="md:col-span-5 text-center animate-bounce w-3 h-3">
                            <div class="btn-circle w-60 inline-block bg-red-800 text-lg">
                                <button class ="justify-center text-xl opacity-100 hover:opacity-30 text-white pt-2 py-py px-4" onClick = {() => {handleClick(service)} }>Add to favorites</button>
                            </div>
                        </div>
                </div>
                )
            })
    
    return ( 
        <div class="min-h-screen text-l p-0 bg-red-300 block items-center justify-center font-['Quicksand'] pb-20">
                <div className ="pl-10 pt-5 pb-5 font-bold text-4xl text-gray-900">Let's get you cooking with gass!</div>

            <div className="container mx-auto bg-white max-w-l w-full rounded-l-lg"> 
                <div>
                    <h2 className="pl-20 grid grid-cols-3 gap-40 gap-y-30 text-l pb-20 pt-20 pr-20"> 
                        {serviceList}
                    </h2>
                </div>
            </div>
        </div>
        
    )
}

export default ServicesPage;


                        {/* <p class ="font-bold text-2xl">{service.travel_type}</p>
                        <br />
                            <a class ="font-bold text-2xl" href= {service.website}>Website!</a>
                        <br /> */}

{/* <h2 className="pl-20 grid grid-cols-3 gap-40 gap-y-30 grid-cols-1 md:grid-cols-5 text-l pb-20 pt-20 pr-20">  */}









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