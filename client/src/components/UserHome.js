import {useEffect, useState} from "react";
import ServicesPage from './ServicesPage';
// import {Route, Routes} from 'react-router-dom';
import React from "react";
import ServicesButton from "./ServicesButton";
import FavoritesPage from "./FavoritesPage";
import FavoritesButton from "./FavoritesButton";
import {Route, Routes} from 'react-router-dom';

function UserHome ({user, setUser}) {
    
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch("/services")
        .then((r) => r.json())
        .then(setAllServices);
    }, []);
    console.log(allServices)
    
    return (  
        <div className="userhome"> 
            <header>Let's get you moving!</header>
                <h1 className="userinfo"> </h1>
                <h2 className="tranportlist"> </h2>
                <h2 className="favorites"> </h2>
            <Routes>
                <Route exact path="/servicespage" element={<ServicesPage user= {user} setUser= {setUser} allServices = {allServices}/>}/>
                <Route exact path="/favoritespage" element={<FavoritesPage user= {user} setUser= {setUser} />}/>
            </Routes>
            <ServicesButton user ={user} setUser ={setUser} />
            <br />
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