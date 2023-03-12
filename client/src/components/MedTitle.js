import MediumTitle from './MediumTitle.jpeg';
import 'tailwindcss/tailwind.css';



function MedTitle() {

    return (
        <div class="w-full p-5 lg:w-1/2 bg-stone-100 md:p-8 mb-4">
        <div className="mx-auto w-3/5 h-1/5">
            <img class="h-1/4 w-11/12 pb-3" src={MediumTitle} alt="StreetChariot" /> 
        </div>
        </div>

        );
    }

export default MedTitle;


