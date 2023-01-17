import React from "react";
import { NavLink } from 'react-router-dom';

function FavoritesButton (){


        
        return (
            <div className="favorites-button">
                <NavLink to='/favoritespage'>
                    <button>
                    Your Favorites!
                    </button>
                </NavLink>    
            </div>
        );

}


    
export default FavoritesButton; 