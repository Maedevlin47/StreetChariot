
import ServicesButton from "./ServicesButton";
// import FavoritesPage from "./FavoritesPage";
import FavoritesButton from "./FavoritesButton";

function UserHome ({user, setUser, allservices, setAllServices}) {
    

    
    return (  
        <body className="font-['Quicksand']">
            <div className="container mx-auto max-w-sm bg-white w-full bg-cover rounded-l-lg"> 
                <div class="flex justify-center my-13">
                    <div class="w-full bg-cover rounded-l-lg pb-40">
                        <header className= "text-center font-['Quicksand'] extrabold text-5xl pb-4 text-red-800 pt-3"> Welcome {user &&`${user.name}`}!</header>
                            <h2 className="pl-5"> </h2>
                            <br></br>
                            <h2 className="pl-5"> </h2>
                            <br></br>
                            <h2 className="pl-5"> </h2>
                            <br></br>
                            <br></br>
                            <ServicesButton class= "" user ={user} setUser ={setUser} />
                            <br />
                            <br />
                            <h2 class= "pl-5 font-bold text-gray-800 text-2xl">{user && user.favoriteTotal}</h2>
                            <br />
                            <br />
                            <FavoritesButton user ={user} setUser ={setUser} />
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