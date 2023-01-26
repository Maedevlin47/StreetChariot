// import {useEffect, useState} from "react";
// import ServicesPage from './ServicesPage';
// import {Route, Routes} from 'react-router-dom';
import React from "react";
import ServicesButton from "./ServicesButton";
// import FavoritesPage from "./FavoritesPage";
import FavoritesButton from "./FavoritesButton";

function UserHome ({user, setUser, allservices, setAllServices}) {
    

    
    return (  
        <div className="userhome"> 
            <header>Let's get you moving!</header>
                <h2 className="userinfo"> </h2>
                <h2 className="tranportlist"> </h2>
                <h2 className="favorites"> </h2>
            <ServicesButton user ={user} setUser ={setUser} />
            <br />
            <br />
            <h2>{user && user.favoriteTotal}</h2>
            <FavoritesButton user ={user} setUser ={setUser} />
            
        </div>
    )
}

export default UserHome;














//<ServicesMainPage path="/servicespage" services={allServices}/> 

// const servicesButton = ({user, setUser, allServices}) =>{
//     const history = useHistory();
//     return(
//         <button className="servicebutton" onClick = {() => history.push({
//             pathname: "/servicespage",
//             state: {user, setUser, allServices, setAllServices}
//         })}>
//             Transportation Services!
//         </button>
//     )
// }



// useEffect(() => {
//     fetch("/services")
//     .then((r) => 
//     r.json()).then(setAllServices);
// }, []);
// console.log(allServices)


    // const [allServices, setAllServices] = useState([]);

    
    // useEffect(() => {
    //     fetch("/services")
    //     .then(r => {
    //         if(r.ok) {
    //             r.json().then ((allServices) => setAllServices(allServices));
    //         }
    //     })
    // }, []);
    // console.log(allServices)