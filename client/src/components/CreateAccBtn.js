import React from "react";
import { NavLink } from 'react-router-dom';

function CreateAccBtn () {
        
    return (
        <div class="text-center font-bold pt-4 text-gray-600">
            <NavLink class="inline-block align-baseline opacity-00 hover:opacity-50 font-['Quicksand']" to="/signup">
                <button className="btn bg-sky-900 text-lg">
                Create an Account!
                </button>
            </NavLink>    
        </div>
    );
}

export default CreateAccBtn; 
