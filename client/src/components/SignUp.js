import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

function SignUp ({user, setUser}) {
    
    // form data
    const [name, setName] = useState ("");
    const [userName, setUserName] = useState ("");
    const [birthdate, setBirthdate] = useState ("");
    const [city, setCity] = useState ("");
    const [state, setState] = useState ("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const loginRoute = useNavigate();


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
                r.json().then((user) => {
                    setUser(user)
                    loginRoute("/userhome")
                } )
            } else {
                r.json().then(console.warn);
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
        <div class="min-h-screen p-0 bg-red-300 flex items-center justify-center font-['Quicksand']">
            <div class="container max-w-screen-lg mx-auto">
                <div>
                    <h2 class="font-bold text-3xl text-gray-600">Sign up form!</h2>
                    <p class="font-bold text-gray-500 mb-6 text-2xl">Give it a try & find your next ride!</p>

                <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                        <div class="text-gray-600">
                            <p class="font-bold text-2xl">Personal Details</p>
                            <p class="text-lg font-bold"> Please fill out all the fields.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div class="md:col-span-5">
                <br/>
                    <div class="md:col-span-5 text-lg">
                        <label for="full_name">Full Name:</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Full name"
                            autoComplete="off"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                    </div>
                <br/>
                    <div class="md:col-span-5 text-lg">
                        <label for="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            placeholder="Simple is key!"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                <br/>
                    <div class="md:col-span-5 text-lg">
                        <label for="birthdate">Birthdate:</label>
                        <input
                            type="date"
                            id="birthdate"
                            placeholder="Your Birthday!"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}/>
                    </div>
                <br/>
                    <div class="md:col-span-5 text-lg">
                        <label for="city">City Name:</label>
                        <input
                            type="city"
                            id="city"
                            placeholder="City Name"
                            autoComplete="off"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}/>
                    </div>
                <br/>
                    <div class="md:col-span-5 text-lg">
                        <label for="state">State Abbreviation:</label>                    
                        <input
                            type="state"
                            id="state"
                            placeholder="State Abbreviation(NY)"
                            autoComplete="off"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={state}
                            onChange={(e) => setState(e.target.value)}/>
                    </div>

                <br/>
                    <div class="md:col-span-5 text-lg">
                        <label for="password">Password:</label>                    
                        <input
                            type="password"
                            id="password"
                            placeholder="Create Password"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"/>
                    </div>
                <br/>
                    <div class="md:col-span-5 text-lg">
                        <label for="passwordConfirmation">Password Confirmation:</label>
                        <input
                            type="password"
                            id="password_confirmation"
                            placeholder="Confirm Password"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            autoComplete="current-password"/>
                    </div>
                <br/>
                    <div class="md:col-span-5 text-right">
                        <div class="inline-flex items-end bg-indigo-600 text-lg">
                            <button class="opacity-100 hover:opacity-50 text-white font-bold py-2 px-4 rounded"
                                type="submit">
                                Sign Up</button>
                        </div>
                    </div>
                    </div>
                    </div>
            </form>
            </div>
            </div>
            </div>
        </div>
    </div>

    )
}
export default SignUp;








// "text-lg border-solid border-2 border-indigo-600 outline-indigo-600 backdrop-opacity-95 fill-indigo-500 shadow-lg" 







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