import { NavLink } from "react-router-dom";

function Navbar ({user}) {


    return(
        <div className="w-full">
            <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
            {user?
                
                (
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <NavLink className="logout" to="/logout">Logout</NavLink>
                <br />
                <NavLink className="userhome" to="/userhome">Home</NavLink>
                <br />
                <NavLink className="servicespage" to="/servicespage">Transport Services</NavLink>
                <br />
                <NavLink className="favoritespage" to="/favoritespage">favorites</NavLink>
                <br />
                <NavLink className="userprofile" to="/userprofile">Accout Settings</NavLink>
                <br />
                </div>
                ) : (
                <div className="loggedout">
                <NavLink className="login" to="/login">Login</NavLink>
                <br />
                <NavLink className="signupnav" to="/signup">Signup</NavLink>
                </div>

                )
            
            }
            </nav>
        </div>
    )
                }

export default Navbar;











