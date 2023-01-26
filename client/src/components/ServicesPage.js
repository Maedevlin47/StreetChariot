import React from "react";
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
                <div key={service.id}>
                    <br />
                        <p>{service.name}</p>
                        <p>{service.travel_type}</p>
                            <a href= {service.website}>{service.name} Website </a>
                    <br />
                    <button onClick = {() => {handleClick(service)} }>Add to favorites</button>
                </div>
                )
            })
    
    return ( 

        <div className="services-page">
            <h1 className ="servicestitle">Let's get you cooking with gass!</h1>
            <h1 className="serviceslist"> 
            <br />
            {serviceList}
            <br />
            </h1>
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