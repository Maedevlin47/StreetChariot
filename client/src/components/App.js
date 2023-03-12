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
import MedTitle from './MedTitle';
import WelcomeWUp from "./WelcomeWUp";
import 'tailwindcss/tailwind.css';
import { useLocation } from 'react-router-dom';


function App() {
      
  const location = useLocation();

  
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
        <header className= "text-center font-['Quicksand'] extrabold text-4xl pt-.5 text-rose-500">
          <NavBar class= "font-['Quicksand'] text-4xl" user = {user}/> 
            <div class="">
              <MedTitle class="h-1/5"/>
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
            <MainPic/>
            <h2>
            {location.pathname === '/' ? (
              <WelcomeWUp/>
              ): null}
              <Footer className="text-center"/>  
            </h2>
      </div>
    </div>
      );
    }

export default App;













