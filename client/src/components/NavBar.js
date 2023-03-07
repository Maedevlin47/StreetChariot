import { NavLink } from "react-router-dom";
import 'tailwindcss/tailwind.css';


function Navbar ({user}) {


    return(
        <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-10 lg:py-1 flex items-center font-bold">
            <nav className="container max-w-screen-lg mx-auto flex justify-center my-13">
                <div className="bg-stone-100 container mx-auto flex items-center justify-between px-4 py-3 w-full block lg:w-auto">
                    {user?
                
                    (
                    <div className="flex items-center">
                    <ul className="mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
                        <NavLink className="font-['Quicksand'] extrabold text-2xl lg:inline-block lg:mt-0 text-rose-500 hover:text-rose-200" to="/userhome">HOME</NavLink>
                        <br />
                        <NavLink className="font-['Quicksand'] extrabold text-2xl lg:inline-block lg:mt-0 text-rose-500 hover:text-rose-200" to="/servicespage">TRANSIT OPTIONS</NavLink>
                        <br />
                        <NavLink className="font-['Quicksand'] extrabold text-2xl lg:inline-block lg:mt-0 text-rose-500 hover:text-rose-200" to="/favoritespage">FAVORITES</NavLink>
                        <br />
                        <NavLink className="font-['Quicksand'] extrabold text-2xl lg:inline-block lg:mt-0 text-rose-500 hover:text-rose-200" to="/userprofile">ACCOUNT SETTINGS</NavLink>
                        <br />
                        <NavLink className="font-['Quicksand'] extrabold text-2xl lg:inline-block lg:mt-0 text-rose-500 hover:text-rose-200" to="/logout">LOGOUT</NavLink>
                        <br />
                    </ul>
                    </div>
                    ) : (
                    <div className="text-sm lg:flex-grow space-x-9 font-bold">
                        <ul className="mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
                            <NavLink className="block mt-4 underline underline-offset-2 font-['Quicksand'] extrabold text-4xl lg:inline-block lg:mt-0 text-red-800 hover:text-red-200" to="/login">Login</NavLink>
                            <br />
                            <NavLink className="block mt-4 underline underline-offset-2 font-['Quicksand'] extrabold text-4xl lg:inline-block lg:mt-0 text-red-800 hover:text-red-200" to="/signup">Signup</NavLink>
                        </ul>
                    </div>
                    )
                }
            </div>
            </nav>
        </div>
    )
                }

export default Navbar;







{/* <NavLink className="block mt-4 underline underline-offset-2 font-['Quicksand'] extrabold text-2xl lg:inline-block lg:mt-0 text-rose-500 hover:text-rose-200" to="/userprofile">Accout Settings</NavLink> */}




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