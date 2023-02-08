import { useLocation } from 'react-router-dom';
import TaxiCab from './TaxiCab.jpg';





function MainPic() {
    const location = useLocation();

    return (
        <div class="resize rounded-md" >
        {location.pathname === '/' ? (
            <img class="scale-12" src={TaxiCab} alt="taxi" className='fpmiddle'/> 
        ): null}
        </div>
        );
    }

export default MainPic;