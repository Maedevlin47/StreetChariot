import React from "react";
import { NavLink } from "react-router-dom";

function Navbar ({user}) {


    return(
        <div>
            {user?
                
                (
                <div className="loggedin">
                <NavLink className="logout" to="/logout">Logout</NavLink>
                <NavLink className="userhome" to="/userhome">Home</NavLink>
                </div>
                ) : (
                <div className="loggedout">
                <NavLink className="login" to="/login">Login</NavLink>
                <NavLink className="signup" to="/signup">Signup</NavLink>
                </div>
                )
            }

        </div>
    )
}

export default Navbar;

