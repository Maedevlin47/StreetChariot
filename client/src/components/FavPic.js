// import { useLocation } from 'react-router-dom';
import PlanePalm from './PlanePalm.jpeg';
import 'tailwindcss/tailwind.css';





function FavPic() {

    return (
        <div className="pb-3 mx-20">
            <img class="lg:block md:w-screen lg:w-screen" src={PlanePalm} alt="Plane in Palms"/> 
        </div>
        );
    }

export default FavPic;