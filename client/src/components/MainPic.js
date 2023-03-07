import { useLocation } from 'react-router-dom';
import TaxiCab from './TaxiCab.jpg';
import 'tailwindcss/tailwind.css';





function MainPic() {
    const location = useLocation();

    return (
        <div className="grayscale pb-3 min-h-fit min-w-fit pb-36" >
        {location.pathname === '/' ? (
            <img class="grayscale-0" src={TaxiCab} alt="taxi" className='fpmiddle'/> 

        ): null}
        </div>
        );
    }

export default MainPic;

            
