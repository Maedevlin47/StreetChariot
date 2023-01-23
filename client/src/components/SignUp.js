import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

function SignUp ({user, setUser}) {
    
    // form data
    const [name, setName] = useState ("");
    const [userName, setUserName] = useState ("");
    const [birthdate, setBirthdate] = useState ("");
    const [city, setCity] = useState ("");
    const [state, setState] = useState ("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    
    // let navigate = useNavigate()


    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                username: userName,
                birthdate: birthdate,
                city: city,
                state: state,
                password: password,
                password_confirmation: passwordConfirmation,
                }),
        })
        .then((r) => {
            if (r.ok) {
            r.json()
            .then((user) => setUser(user));
            }
        });
        setTimeout(() =>{
            setName("")
            setUserName("")
            setBirthdate("")
            setCity("")
            setState("")
            setPassword("")
            setPasswordConfirmation("")
            }, 1000)
        }
        console.log(user)

        
        // console.log(signupData)
        // navigate('/userhome')
        
    return (
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <br/>
                <label>Name:</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <label >Username:</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    placeholder="Simple is key!"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <br/>
                <label>Birthdate:</label>
                <input
                    type="date"
                    id="birthdate"
                    placeholder="Your Birthday!"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                />
                <br/>
                <label >City:</label>
                <input
                    type="city"
                    id="city"
                    placeholder="City Name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <br/>
                <label >State:</label>
                <input
                        type="state"
                        id="state"
                        placeholder="State Abbreviation(NY)"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                />
                <br/>
                <label >Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Create Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
                <br/>
                <label >Password Confirmation:</label>
                <input
                    type="password"
                    id="password_confirmation"
                    placeholder="Confirm Password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password"
                />
                <br/>
                <button type="submit">Sign Up</button>
        </form>
        
        
        </div>

    )
}
export default SignUp;






    // for getting the form to rerender
    // const [signupData,setSignupData] = useState ('')
    // ({name: "", username: "", birthdate: "", 
    // city: "", state: "", password: "", password_confirmation: ""})



     // useEffect (() => {
        //     if(user) {
        //         setSignupData({name: "", username: "", birthdate: "", city: "", state: "", password: "", password_confirmation: ""});
        //         setUser("")
        //     }
        // }, [setUser, signupData]);
        
    


    // for getting the form to rerender
    // const [signupData,setSignupData] = useState ({name: "", username: "", birthdate: "", 
    // city: "", state: "", password: "", password_confirmation: ""})
    
    // const handleChange = (e) => {
    //     setSignupData({[e.target.name]: e.target.value})
    // }



    // return (
    //     <div>
    //         <form onSubmit={handleSubmit}>
    //             <h1>Sign Up</h1>
    //             <br/>
    //             <label>Name:</label>
    //             <input
    //                 type="text"
    //                 id="name"
    //                 placeholder="Full name"
    //                 value={signupData.name}
    //                 onChange={handleChange}
    //                 // onChange={(e) => signupData(e.target.value)}