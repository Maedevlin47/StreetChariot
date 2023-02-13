// import './App.css';
import React from "react";
import {useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import UserHome from './UserHome';
import NavBar from './NavBar';
import LogOut from './LogOut';
import ServicesPage from './ServicesPage';
import FavoritesPage from "./FavoritesPage";
import UserProfile from './UserProfile';
import Footer from './Footer';
import MainPic from './MainPic';
import 'tailwindcss/tailwind.css';


function App() {
      const [user, setUser]= useState(null)
      
      console.log(user)

      useEffect(() =>{
        fetch("/user_logged_in")
        .then (r => { 
          if (r.ok) {
            r.json().then((user) => setUser(user))
          }
        } )
      },[])
    
    console.log(user)
    
    const [services, setServices] = useState([]);
    
      
    useEffect(() => {
        fetch("/services")
        .then(r => {
            if(r.ok) {
                r.json().then ((serviceData) => setServices(serviceData));
            }
        })
      }, [user]);
    
  // to delete a favorite in favorites page
    function handleRemoveFavorite(id) {
      const updateFavoriteArray = user.services.filter ((service) => service.id !== id);
      setUser({...user, services: updateFavoriteArray});
    }




    return (
      <div className="notloggedin">
      <div className="min-h-screen w-screen bg-fixed">
      <header className= "text-center font-['Quicksand'] extrabold text-4xl pt-.5 text-red-800">
        <NavBar class= "font-['Quicksand'] text-4xl" user = {user}/> 
          <div class="text-center">
              <h1 class="text-center text-9xl font-medium pb-3">StreetChariot</h1>
            {/* <h2 class="text-right font-['Quicksand']pb-2 pr-3 pb-1">Let's bust a move!</h2> */}
          </div> 
        </header>
        <Routes style={{ backgroundColor: "rgba(255, 255, 255, 0.160)" }}>
            <Route exact path="/signup" element={
                <SignUp 
                  user= {user} 
                  setUser= {setUser} />}/>
            <Route exact path="/login" element={
                <Login  
                  user= {user} 
                  setUser= {setUser} />}/>
            <Route exact path="/userhome" element={
                <UserHome 
                user={user} 
                setUser ={setUser}/>}/>
            <Route exact path="/logout" element={
                <LogOut 
                  user= {user} 
                  setUser= {setUser} />}/>
            <Route exact path="/servicespage" element={
                <ServicesPage 
                  user= {user} 
                  setUser= {setUser} 
                  services ={services} 
                  favorites = {user ? user.services : []}
                  />}/>
            {/* <Route exact path="/favoritespage" element={<FavoritesPage user= {user} setUser= {setUser} />}/> */}
            <Route exact path="/favoritespage" element={
                <FavoritesPage 
                  user= {user} 
                  setUser= {setUser} 
                  favorites = {user ? user.services : []}
                  // setFavorites = {setFavorites}
                  handleRemoveFavorite = {handleRemoveFavorite}
                  />}/>
            <Route exact path="/userprofile" element={
                <UserProfile 
                  user= {user} 
                  setUser= {setUser} 
                  services = {services} 
              />}/>

          </Routes>
          {/* </Container> */}
          <MainPic/>
          <Footer className="text-center "/>  
    </div>
  </div>



    );
  }

export default App;













// import styles from "./index.css"


// import Container from '@mui/material/Container';
// import * as React from 'react';


// import * as ReactDOM from 'react-dom/client';
// import * as React from 'react';
// import TaxiCab from './TaxiCab.jpg';
// import { useLocation } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom'
// import ServicesButton from './ServicesButton';



{/* <header className= "text-center font-['Quicksand'] extrabold text-5xl pt-10 text-red-800"> Welcome {user &&`${user.name}`}! */}



    // function updateRead() {
    //     fetch("/services", {
    //         method: "PATCH",
    //         headers,
    //         body: JSON.stringify({ favorites: ++service.favorites }),
    //         })
    //     .then((r) => r.json())
    //     .then((data) => {
    //             setServiceData({ ...data });
    //         });
    //     }
    //     console.log(setServiceData)


// function handleRemoveFavorite(id) {
//   const updateFavoriteArray = favorites.filter(
//     (favorite) => favorite.id !== id
//   );
//   setFavorites(updateFavoriteArray);
// }


// <button onClick={handleClick}>
// Go to Transportation Services!
// </button>


// const history = useHistory();

// function handleClick () {
//     history.push('/servicespage');

// }


/* <Route exact path="/signup" element={<SignUp user= {user} setUser= {setUser} />}/>
<Route exact path="/login" element={<Login  user= {user} setUser= {setUser} />}/> */



/* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> potato.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */



// const history = useHistory();


//     const [user, setUser]= useState(null)
//     console.log(user)

//     useEffect(() =>{
//       fetch("/user_logged_in")
//       .then (r => r.json())
//       .then((user) => setUser(user))
//       },[])
  
//   console.log(user)

        
//   function handleClick () {
//       history.push('/servicespage');

//   }


//   return (
//     <div className="App">
//       <header className="App-header">Welcome
//       <NavBar user = {user}/>
//       </header>
//       <button onClick={handleClick}>
//       Go to Transportation Services!
//       </button>
//       <ServicesButton />
//       <Routes>
//         <Route exact path="/signup" element={<SignUp user= {user} setUser= {setUser} />}/>
//         <Route exact path="/login" element={<Login  user= {user} setUser= {setUser} />}/>
//         <Route exact path="/userhome" element={<UserHome user={user} setUser ={setUser}/>}/>
//         <Route exact path="/logout" element={<LogOut user= {user} setUser= {setUser} />}/>
//       </Routes>


//     </div>
//   );
// }

// export default App;

// function favoriteService(service) {
//   let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//   favorites.push(service);
//   localStorage.setItem("favorites", JSON.stringify(favorites));
//   }

// function getFavorites() {
//   return JSON.parse(localStorage.getItem("favorites")) || [];
//   }