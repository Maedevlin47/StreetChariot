
import ServicesButton from "./ServicesButton";
// import FavoritesPage from "./FavoritesPage";
import FavoritesButton from "./FavoritesButton";
import HomeDogPic from "./HomeDogPic";

function UserHome ({user, setUser, allservices, setAllServices}) {
    

    
    return (  
        <body className="min-h-screen text-l p-0 bg-red-300 block items-center justify-center font-['Quicksand']">
            {/* <div > */}
                {/* controlles white box */}
                <div class="container mx-auto max-w-sm bg-white w-full bg-cover rounded-l-lg"> 
                    <div class="flex justify-center my-13">
                        <div class="w-full bg-cover rounded-l-lg pb-40">
                            <header class= "text-center font-['Quicksand'] extrabold text-5xl pb-4 text-red-800 pt-3"> Welcome {user &&`${user.name}`}!</header>
                            <h2 class="text-right text-3xl pt-5 pb-2 pr-36 text-red-800">Let's bust a move...</h2>
                                <div class="center mx-4 pl-20">
                                    <HomeDogPic class= "h-auto m-8 lg:block"></HomeDogPic>
                                </div>
                                <div>
                                    <h3 class="pt-10 pl-5 font-bold text-gray-800 text-2xl font-['Quicksand']"> description </h3>
                                    <br></br>
                                    <h2 class="pl-5 font-bold text-gray-800 text-2xl font-['Quicksand']"> description </h2>
                                    <br></br>
                                    <h2 class="pl-5 font-bold text-gray-800 text-2xl font-['Quicksand']">description  </h2>
                                    <br />
                                    <br />
                                    <div class="mx-96 pl-20">
                                    <br />
                                        <h2 class= "pl-5 font-bold text-gray-800 text-2xl font-['Quicksand']" >{user && user.favoriteTotal}</h2>
                                        <br></br>
                                        <br></br>
                                        <ServicesButton class= "" user ={user} setUser ={setUser} />
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




{/* <header>Let's get you moving!</header> */}










//<ServicesMainPage path="/servicespage" services={allServices}/> 

// const servicesButton = ({user, setUser, allServices}) =>{
//     const history = useHistory();
//     return(
//         <button className="servicebutton" onClick = {() => history.push({
//             pathname: "/servicespage",
//             state: {user, setUser, allServices, setAllServices}
//         })}>
//             Transportation Services!
//         </button>
//     )
// }



// useEffect(() => {
//     fetch("/services")
//     .then((r) => 
//     r.json()).then(setAllServices);
// }, []);
// console.log(allServices)


    // const [allServices, setAllServices] = useState([]);

    
    // useEffect(() => {
    //     fetch("/services")
    //     .then(r => {
    //         if(r.ok) {
    //             r.json().then ((allServices) => setAllServices(allServices));
    //         }
    //     })
    // }, []);
    // console.log(allServices)