import { NavLink } from "react-router-dom";
import 'tailwindcss/tailwind.css';


function Navbar ({user}) {


    return(
        <div className="bavbar">
            <nav className="container mx-auto flex items-center justify-between px-4 py-3">
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            {user?
                
                (
                <div className="text-sm lg:flex-grow space-x-9">
                    <NavLink className="block mt-4 underline underline-offset-2 font-['Quicksand'] extrabold text-4xl lg:inline-block lg:mt-0 text-red-800 hover:text-yellow-300" to="/logout">Logout</NavLink>
                    <br />
                    <NavLink className="block mt-4 underline underline-offset-2 font-['Quicksand'] extrabold text-4xl lg:inline-block lg:mt-0 text-red-800 hover:text-yellow-300" to="/userhome">Home</NavLink>
                    <br />
                    <NavLink className="block mt-4 underline underline-offset-2 font-['Quicksand'] extrabold text-4xl lg:inline-block lg:mt-0 text-red-800 hover:text-yellow-300" to="/servicespage">Transport Services</NavLink>
                    <br />
                    <NavLink className="block mt-4 underline underline-offset-2 font-['Quicksand'] extrabold text-4xl lg:inline-block lg:mt-0 text-red-800 hover:text-yellow-300" to="/favoritespage">favorites</NavLink>
                    <br />
                    <NavLink className="block mt-4 underline underline-offset-2 font-['Quicksand'] extrabold text-4xl lg:inline-block lg:mt-0 text-red-800 hover:text-yellow-300" to="/userprofile">Accout Settings</NavLink>
                    <br />
                </div>
                ) : (
                <div className="text-sm lg:flex-grow space-x-9">
                    <NavLink className="block mt-4 underline underline-offset-2 font-['Quicksand'] extrabold text-4xl lg:inline-block lg:mt-0 text-red-800 hover:text-yellow-300" to="/login">Login</NavLink>
                    <NavLink className="block mt-4 underline underline-offset-2 font-['Quicksand'] extrabold text-4xl lg:inline-block lg:mt-0 text-red-800 hover:text-yellow-300" to="/signup">Signup</NavLink>
                </div>
                
                    )
            
            }
            </div>
            </nav>
        </div>
    )
                }

export default Navbar;











// (
//     <div className="loggedin">
//     <NavLink className="logout" to="/logout">Logout</NavLink>
//     <br />
//     <NavLink className="userhome" to="/userhome">Home</NavLink>
//     <br />
//     <NavLink className="servicespage" to="/servicespage">Transport Services</NavLink>
//     <br />
//     <NavLink className="favoritespage" to="/favoritespage">favorites</NavLink>
//     <br />
//     <NavLink className="userprofile" to="/userprofile">Accout Settings</NavLink>
//     <br />
//     </div>
//     ) : (
//     <div className="loggedout">
//     <NavLink className="login" to="/login">Login</NavLink>
//     <br />
//     <NavLink className="signupnav" to="/signup">Signup</NavLink>
//     </div>

//     )