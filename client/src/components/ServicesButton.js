import React from "react";
import { NavLink } from 'react-router-dom';

function ServicesButton (){


        
        return (
            <div className="">
                <NavLink class= "pl-5 font-bold text-gray-800 text-2xl" to='/servicespage'>
                    <button>
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