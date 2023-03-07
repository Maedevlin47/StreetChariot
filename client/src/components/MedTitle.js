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


{/* <div class="w-full p-5 lg:w-1/2 bg-white p-4 px-4 md:p-8 mb-6 place-content-center"> */}



// function MedTitle() {
//     const location = useLocation();

//     return (
//         <div className="grayscale pb-3 min-h-fit min-w-fit" >
//         {location.pathname === '/' ? (
//             <img class="grayscale-0" src={MediumTitle} alt="StreetChariot" /> 

//         ): null}
//         </div>
//         );
//     }

// export default MedTitle;

// function MedTitle() {

//     return (
//         <div className="pb-3 min-h-fit min-w-fit " >
//             <img class="h-1/3 tracking-wide w-full" src={MediumTitle} alt="StreetChariot" /> 
//         </div>
//         );
//     }

// export default MedTitle;