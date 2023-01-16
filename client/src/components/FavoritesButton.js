import React from "react";
import { NavLink } from 'react-router-dom';

function FavoritesButton (){


        
        return (
            <NavLink to='/favoritespage'>
                <button>
                Your Favorites!
                </button>
            </NavLink>    
        
        );

}


    
export default FavoritesButton; 