import React from "react";
import { NavLink } from 'react-router-dom';

function ServicesButton (){


        
        return (
            <NavLink to='/servicespage'>
                <button>
                View Transportation Services!
                </button>
            </NavLink>    
        
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