import LoginP from './LoginP.jpeg';
import 'tailwindcss/tailwind.css';





function LoginPic() {

    return (
        <div >
            <img class="grayscale-0 text-5xl font-bold text-left tracking-wide" src={LoginP} alt="LG" 
            /> 
        </div>
        );
    }

export default LoginPic;

// return (
//     <div >
//     {location.pathname === './Login' ? (
//         <img class="grayscale-0" src={LoginP} alt="LG" /> 

//     ): null}
//     </div>
//     );
// }


{/* <div class="bg-fixed opacity-60 inset-0 z-0 px-24 position-absolute min-h-screen w-full">
<h1 class="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
<p class="text-3xl my-4">Capture your personal memory in unique way, anywhere.</p>
</div> */}

// class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"