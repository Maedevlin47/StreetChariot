// import { useLocation } from 'react-router-dom';
import LoginP from './LoginP.jpeg';
import 'tailwindcss/tailwind.css';





function LoginPic() {

    return (
        <div >
            <img class="grayscale-0" src={LoginP} alt="LG" /> 
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