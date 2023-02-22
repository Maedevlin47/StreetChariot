import React from "react";
import { NavLink } from 'react-router-dom';

function ServicesButton (){


        
        return (
            <div className="favorites-button pl-5 text-2xl font-['Quicksand'] text-left font-bold text-gray-600">
                <NavLink class= "font-bold text-gray-800 inline-block align-baseline opacity-00 hover:opacity-50" to='/servicespage'>
                    <button class="btn bg-sky-900 text-lg">
                    View Transportation Services!
                    </button>
                </NavLink>    
            </div>
        );

}


    
export default ServicesButton; 
    
    
    
    
    
    
    
    
    
    // const [allServices, setAllServices] = useState([])




// return(
//     <button className="servicebutton" onClick = {() => history.push({
//         pathname: "/servicespage",
//         state: {user, setUser, setAllServices}
//     })}>
//         Transportation Services!
//     </button>
// )