import './App.css';
import {useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import UserHome from './UserHome';
import NavBar from './NavBar';
import LogOut from './LogOut';
import ServicesPage from './ServicesPage';
import FavoritesPage from "./FavoritesPage";

// import { BrowserRouter as Router } from 'react-router-dom'
// import ServicesButton from './ServicesButton';



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




  return (
    <div className="App">
      <header className="App-header">Welcome
      <NavBar user = {user}/>
      </header>
      <Routes>
        <Route exact path="/signup" element={<SignUp user= {user} setUser= {setUser} />}/>
        <Route exact path="/login" element={<Login  user= {user} setUser= {setUser} />}/>
        <Route exact path="/userhome" element={<UserHome user={user} setUser ={setUser}/>}/>
        <Route exact path="/logout" element={<LogOut user= {user} setUser= {setUser} />}/>
        <Route exact path="/servicespage" element={<ServicesPage user= {user} setUser= {setUser} />}/>
        {/* <Route exact path="/favoritespage" element={<FavoritesPage user= {user} setUser= {setUser} />}/> */}
        <Route exact path="/favoritespage" element={<FavoritesPage user= {user} setUser= {setUser} />}/>

      </Routes>


    </div>
  );
}

export default App;





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