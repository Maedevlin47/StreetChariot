import React from "react";
import { NavLink } from "react-router-dom";

function Navbar ({user}) {


    return(
        <div className="navbar">
            {user?
                
                (
                <div className="loggedin">
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
                <NavLink className="signup" to="/signup">Signup</NavLink>
                </div>
                )
            }

        </div>
    )
}

export default Navbar;

