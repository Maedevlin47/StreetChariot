import { NavLink } from 'react-router-dom';

function ServicesButton (){


        
        return (
            <div className="services-button">
                <NavLink to='/servicespage'>
                    <button>
                    View Transportation Services!
                    </button>
                </NavLink>    
            </div>
        );

}


    
export default ServicesButton; 
    
    
    
    
    
    
    
    
    
    // const [allServices, setAllServices] = useState([])




