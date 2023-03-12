
import ServicesButton from "./ServicesButton";
import FavoritesButton from "./FavoritesButton";
import HomeDogPic from "./HomeDogPic";

function UserHome ({user, setUser, allservices, setAllServices}) {
    

    
    return (  
        <body className="min-h-screen text-l p-0 bg-rose-200 block items-center justify-center font-['Quicksand']">
                <div class="container mx-auto max-w-sm bg-stone-100 w-full bg-cover rounded-l-lg"> 
                    <div class="flex justify-center my-13">
                        <div class="w-full bg-cover rounded-l-lg pb-40">
                            <header class= "text-center font-['Quicksand'] extrabold text-5xl pb-4 text-rose-500 pt-3"> Hey {user &&`${user.name}`}!</header>
                            <h2 class="text-right text-3xl pt-5 pb-2 pr-36 text-rose-500">Let's bust a move...</h2>
                                <div class="center mx-4 pl-20">
                                    <HomeDogPic class= "h-auto m-8 lg:block"></HomeDogPic>
                                </div>
                                <div>
                                    <h3 class="pt-10 pl-12 pr-12 font-bold text-gray-800 text-2xl font-['Quicksand']"> {user &&`${user.name}`}, this is your home page!  From here you can view the "Transportation Services" page with all the different transit options, key information on the platform, how to set up an account and their website.  </h3>
                                    <br></br>
                                    <h2 class="pl-12 pr-12 font-bold text-gray-800 text-2xl font-['Quicksand']"> You also have the "Your Favorites" page where all the transportation platforms you favorite, will live for you to review and come back to in the future! </h2>
                                    <br />
                                    <br />
                                    <div class="mx-96 pl-20">
                                    <br />
                                        <h2 class= "pl-5 font-bold text-rose-500 text-2xl font-['Quicksand']" >{user && user.favoriteTotal}</h2>
                                        <br></br>
                                        <br></br>
                                        <ServicesButton user ={user} setUser ={setUser} />
                                        <br />
                                        <br />
                                        <FavoritesButton user ={user} setUser ={setUser} />
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
        </body>        

    )
}

export default UserHome;














