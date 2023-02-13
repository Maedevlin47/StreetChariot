// import { useLocation } from 'react-router-dom';
import PlanePalm from './PlanePalm.jpeg';
import 'tailwindcss/tailwind.css';





function FavPic() {

    return (
        <div className="grayscale pb-3 min-h-fit min-w-fit" >
            <img class="grayscale-0 text-5xl font-bold text-left tracking-wide h-3/5 w-full" src={PlanePalm} alt="Plane in Palms" className='fpmiddle'/> 
        </div>
        );
    }

export default FavPic;