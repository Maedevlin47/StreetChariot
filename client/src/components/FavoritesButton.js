import { NavLink } from 'react-router-dom';

function FavoritesButton (){


        
        return (
            <div className="favorites-button">
                <NavLink class= "pl-5 font-bold text-gray-800 text-2xl" to='/favoritespage'>
                    <button>
                    Your Favorites!
                    </button>
                </NavLink>    
            </div>
        );

}


    
export default FavoritesButton; 