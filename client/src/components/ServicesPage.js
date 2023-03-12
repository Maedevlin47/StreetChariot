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
                                            <li className="font-bold text-2xl link link-primary">
                                                <a href={service.website} target="_blank" rel="noopener noreferrer">Website!</a>
                                            </li>
                                        </ul>
                                    <br />
                                        <h3 class ="font-bold text-3xl">Description & Features:</h3>
                                        <br />
                                        <p class ="font-bold text-2xl">{service.description}</p>
                                    <br />
                                    <br />
                                        <h4 class ="font-bold text-3xl">
                                            <p class ="font-bold text-2xl">{service.features}</p>
                                        </h4>
                                    <br />
                                        <h5 class="md:col-span-5 text-center animate-bounce w-3 h-3">
                                            <p class="btn-circle w-60 inline-block bg-rose-600 text-lg">
                                                <button class = "justify-center text-xl opacity-100 hover:opacity-30 text-white pt-2 py-py px-4" onClick = {() => {handleClick(service)} }>Add to favorites</button>   
                                            </p>
                                        </h5>
                                    <br />
                            </div>
                    )  
                });


        console.log(services)
    
        return ( 
            <div class="min-h-screen text-l p-0 bg-rose-200 block items-center justify-center font-['Quicksand'] pb-20">
                <div className ="pl-10 pt-5 pb-5 font-bold text-5xl text-rose-600">Let's get you cooking with gas!</div>
                    <div className="container mx-auto bg-stone-100 max-w-l w-full rounded-l-lg"> 
                        <div>
                            <h2 className="pl-20 grid grid-cols-3 gap-40 gap-y-30 text-l pb-20 pt-20 pr-20"> 
                                {serviceList}
                            </h2>
                            <h3 class ="font-bold text-3xl text-center underline decoration-4 underline-offset-2 text-rose-500"> Creating An Account! </h3>

                            <p class = "font-bold text-2xl text-center pt-12 pb-12 pl-6 pr-6">
                                The transportation service websites linked above, will lead you to the signup pages for each service.  From there you will need to enter an email or a phone number to start an account.  
                                Once you do that you just need to follow the prompts on the screen to create your account.  You will most likely have to confirm your email account and /or phone number. If you sign up on your computer, in your smartphone app store, download the service’s app, all of them are free, and then log into the app using the email or phone number & password you just created!  
                            </p>
                                
                        </div>
                    </div>
            </div>
            
        )
    }

export default ServicesPage;



