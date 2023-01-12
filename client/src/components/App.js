import './App.css';
import { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom';
// import {Route, Routes} from 'react-router-dom';
// import Login from './Login';
import SignUp from './SignUp';

function App() {

    const [user, setUser]= useState(null)
    console.log(user)

    useEffect(() =>{
      fetch("/user_logged_in")
      .then (r => r.json())
      .then((user) => setUser(user))
      },[])
  
  
  
  
  return (
    <div className="App">
      <header className="App-header">
      {/* <Navbar/> */}
      <SignUp/>
      </header>
      <Routes>
        <Route exact path="/signup" element={<SignUp user= {user} setUser= {setUser} />}/>
      </Routes>
    </div>
  );
}

export default App;








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