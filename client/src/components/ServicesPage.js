import React from "react";

function ServicesPage({user, setUser, services, favorites}) {

    
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
                    console.log(data);
                    setUser({...user, services: [...user.services, data]});
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
                                    <br/>
                                        <h2 class ="font-bold text-3xl text-center underline decoration-4 underline-offset-2 text-rose-500">{service.name}</h2>
                                    <br/>
                                        <ul class="list-disc">
                                            <li class="font-bold text-2xl"> {service.travel_type}</li>
                                            <li class ="font-bold text-2xl link link-primary" href={service.website}>Website!</li>
                                        </ul>
                                    <br />
                                        <h3 class ="font-bold text-3xl">Description:
                                        <br />
                                            <p class ="font-bold text-2xl">{service.description}</p>
                                        </h3>
                                    <br />

                                    <br />
                                        <h4 class ="font-bold text-3xl">Features:
                                            <p class ="font-bold text-2xl">{service.features}</p>
                                        </h4>
                                    <br />
                                        <p class="md:col-span-5 text-center animate-bounce w-3 h-3">
                                            <button class ="btn-circle w-60 inline-block bg-rose-800 text-lg justify-center text-xl opacity-100 hover:opacity-30 text-white pt-2 py-py px-4" onClick = {() => {handleClick(service)} }>Add to favorites</button>   
                                        </p>
                                    <br />
                            </div>
                    )  
                });


        console.log(services)
    
        return ( 
            <div class="min-h-screen text-l p-0 bg-rose-300 block items-center justify-center font-['Quicksand'] pb-20">
                <div className ="pl-10 pt-5 pb-5 font-bold text-4xl text-gray-900">Let's get you cooking with gass!</div>
                    <div className="container mx-auto bg-stone-100 max-w-l w-full rounded-l-lg"> 
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




    //         return (
    //             <div key={service.id}>
    //                 <br />
    //                     <div class ="font-bold text-3xl text-center underline decoration-4 underline-offset-2 text-rose-500">{service.name}</div>
    //                     <br/>
    //                         <div class="list-disc">
    //                             <li class="font-bold text-2xl"> {service.travel_type}</li>
    //                     <br />
    //                             <li class ="font-bold text-2xl link link-primary" href={service.website}>Website!</li>
    //                     <br />
    //                     </div>
    //                     <br />
    //                         <div class ="font-bold text-2xl">Description:
    //                             <p>{service.description}</p>
    //                         </div>
    //                     <br />
    //                         <div class ="font-bold text-2xl">How to create an accout:
    //                             <p>
    //                             {service.signup}</p>
    //                         </div>
    //                     <br />
    //                         <div class ="font-bold text-2xl">Platform Features:
    //                             <p>{service.features}</p>
    //                         </div>
    //                     <br />
    //                     <div class="md:col-span-5 text-center animate-bounce w-3 h-3">
    //                         <div class="btn-circle w-60 inline-block bg-rose-800 text-lg">
    //                             <button class ="justify-center text-xl opacity-100 hover:opacity-30 text-white pt-2 py-py px-4" onClick = {() => {handleClick(service)} }>Add to favorites</button>
    //                         </div>
    //                     </div>
    //             </div>
    //             )
    //         })






                // <div>
                //     {services.map(service => (
                //         <div className="pl-20 grid grid-cols-3 gap-40 gap-y-30 text-l pb-20 pt-20 pr-20" key={service.id}>
                //             <br/>
                //                 <h2 class ="font-bold text-3xl text-center underline decoration-4 underline-offset-2 text-rose-500">{service.name}</h2>
                //             <br/>
                //                 <ul class="list-disc">
                //                     <li class="font-bold text-2xl"> {service.travel_type}</li>
                //                     <li class ="font-bold text-2xl link link-primary" href={service.website}>Website!</li>
                //                 </ul>
                //             <br />
                //                 <p class ="font-bold text-2xl">Description: {service.description}</p>
                //             <br />
                //                 <p class ="font-bold text-2xl">Signup: {service.signup}</p>
                //             <br />
                //                 <p class ="font-bold text-2xl">{service.features}</p>
                //             <br />
                //                 <p class="md:col-span-5 text-center animate-bounce w-3 h-3 btn-circle w-60 inline-block bg-rose-800 text-lg">
                //                     <button class ="justify-center text-xl opacity-100 hover:opacity-30 text-white pt-2 py-py px-4" onClick = {() => {handleClick(service)} }>Add to favorites</button>   
                //                 </p>
                //             <br />
                //         </div>
                //     ))}

// {serviceList}






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



//     import React from "react";

// function ServicesPage({user, setUser, services, favorites}) {

    
//     function handleClick (service) {
//         console.log(service)
//         fetch ("/favorites", {
//             method: "POST",
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify({
//                 user_id: user.id,
//                 service_id: service.id
//             })
//         }) 
//         .then((r) =>{
//             if (r.ok) {
//                 r.json().then((data) => {
//                     console.log(data);
//                     setUser({...user, services: [...user.services, data]});
//                     // copy of the array and adding to the new copy
//                 } )
//             } else {
//                 r.json().then((bad) => {
//                     console.warn(bad)
//                 })
//             }
//         })
//     }

//             const serviceList = services.map((service) => {
//                         return (
//                             <div key={service.id}>

//                                 <br/>
//                                     <h2 class ="font-bold text-3xl text-center underline decoration-4 underline-offset-2 text-rose-500">{service.name}</h2>
//                                 <br/>
//                                     <ul class="list-disc">
//                                         <li class="font-bold text-2xl"> {service.travel_type}</li>
//                                         <li class ="font-bold text-2xl link link-primary" href={service.website}>Website!</li>
//                                     </ul>
//                                 <br />
//                                     <li class ="font-bold text-2xl">Description: {service.description}</li>

//                                 <br />

//                                     <p class ="font-bold text-2xl">Signup: {service.signup}</p>
//                                 <br />
//                                     <p class ="font-bold text-2xl">{service.features}</p>
//                                 <br />
//                                     <p class="md:col-span-5 text-center animate-bounce w-3 h-3">
//                                         <button class ="btn-circle w-60 inline-block bg-rose-800 text-lg justify-center text-xl opacity-100 hover:opacity-30 text-white pt-2 py-py px-4" onClick = {() => {handleClick(service)} }>Add to favorites</button>   
//                                     </p>
//                                 <br />
//                             </div>
//                     )  
//                 });


//         console.log(services)
    
//         return ( 
//             <div class="min-h-screen text-l p-0 bg-rose-300 block items-center justify-center font-['Quicksand'] pb-20">
//                 <div className ="pl-10 pt-5 pb-5 font-bold text-4xl text-gray-900">Let's get you cooking with gass!</div>
//                     <div className="container mx-auto bg-stone-100 max-w-l w-full rounded-l-lg"> 
//                         <div>
//                             <h2 className="pl-20 grid grid-cols-3 gap-40 gap-y-30 text-l pb-20 pt-20 pr-20"> 
//                                 {serviceList}
//                             </h2>
//                         </div>
//                     </div>
//             </div>
            
//         )
//     }

// export default ServicesPage;