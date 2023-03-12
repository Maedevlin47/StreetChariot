import { NavLink } from 'react-router-dom';

function FavoritesButton (){


        
        return (
            <div className="favorites-button pl-5 text-2xl font-['Quicksand'] text-left font-bold text-gray-600">
                <NavLink class= "font-bold text-gray-800 inline-block align-baseline opacity-00 hover:opacity-50" to='/favoritespage'>
                    <button class="btn bg-rose-600 text-lg">
                    Your Favorites!
                    </button>
                </NavLink>    
            </div>
        );

}


    
export default FavoritesButton; 