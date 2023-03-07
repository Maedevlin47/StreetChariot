import HomePageDog from './HomePageDog.jpeg';
import 'tailwindcss/tailwind.css';




function HomeDogPic() {

    return (
        // <div className="container mx-auto max-w-m bg-white w-full bg-cover rounded-l-lg"> 
        <div className="container mx-auto max-w-m bg-stone-100 w-full bg-cover rounded-l-lg" >
            <img class="h-1/4 w-11/12 pb-3" src={HomePageDog} alt="Plane in Palms"/> 
        </div>
        // </div>

        );
    }

export default HomeDogPic;

// tracking-wide
{/* <div className="pb-3 min-w-fit w-full" > */}


{/* <div className="pb-3 pl-60 pr-20" > */}

{/* <img class="container mx-auto max-w-m bg-white w-full bg-cover rounded-l-lg h-1/4 pb-3 pl-36 pr-36" src={HomePageDog} alt="Plane in Palms" className='fpmiddle'/>  */}

// pl-36 pr-36