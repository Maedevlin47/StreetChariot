import { NavLink } from "react-router-dom";
import 'tailwindcss/tailwind.css';


function Navbar ({user}) {


    return(
        <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-10 lg:py-1 flex items-center">
            <nav className="container max-w-screen-lg flex justify-center my-13">
                <div className="px-4 py-3 w-full block lg:w-auto">
                    {user?
                
                    (
                    <div className="menu menu-horizontal ">
                    <ul className="mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 ">
                        <NavLink className="btn bg-rose-200 hover:bg-rose-300 normal-case pl-6 pr-6 py-2 text-center font-['Quicksand'] font-mono text-3xl lg:inline-block lg:mt-0 text-rose-500" to="/userhome">HOME</NavLink>
                        <br />
                        <NavLink className="btn bg-rose-200 hover:bg-rose-300 font-['Quicksand'] pl-6 pr-6 py-2 text-center font-['Quicksand'] font-mono text-3xl lg:inline-block lg:mt-0 text-rose-500" to="/servicespage">TRANSIT OPTIONS</NavLink>
                        <br />
                        <NavLink className="btn bg-rose-200 hover:bg-rose-300 font-['Quicksand'] pl-6 pr-6 py-2 text-center font-['Quicksand'] font-mono text-3xl lg:inline-block lg:mt-0 text-rose-500" to="/favoritespage">FAVORITES</NavLink>
                        <br />
                        <NavLink className="btn bg-rose-200 hover:bg-rose-300 font-['Quicksand'] pl-6 pr-6 py-2 text-center font-['Quicksand'] font-mono text-3xl lg:inline-block lg:mt-0 text-rose-500" to="/userprofile">ACCOUNT SETTINGS</NavLink>
                        <br />
                        <NavLink className="btn bg-rose-200 hover:bg-rose-300 font-['Quicksand'] pl-6 pr-6 py-2 text-center font-['Quicksand'] font-mono text-3xl lg:inline-block lg:mt-0 text-rose-500" to="/logout">LOGOUT</NavLink>
                        <br />
                    </ul>
                    </div>
                    ) : (
                    <div className="menu menu-horizontal">
                        <ul className="mb-2 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
                            <NavLink className="btn bg-rose-200 hover:bg-rose-300 font-['Quicksand'] pl-6 pr-6 py-2 text-center font-['Quicksand'] font-mono text-3xl lg:inline-block lg:mt-0 text-rose-500" to="/login">Login</NavLink>
                            <br />
                            <NavLink className="btn bg-rose-200 hover:bg-rose-300 font-['Quicksand'] pl-6 pr-6 py-2 text-center font-['Quicksand'] font-mono text-3xl lg:inline-block lg:mt-0 text-rose-500" to="/signup">Signup</NavLink>
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







