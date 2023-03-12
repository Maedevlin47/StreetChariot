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
                    loginRoute("/login")
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
        <div class="min-h-screen p-0 bg-rose-200 flex items-center justify-center font-['Quicksand']">
            <div class="container max-w-screen-lg mx-auto">
                <div>
                    <h2 class="font-bold text-3xl text-gray-900">Sign up form!</h2>
                    <p class="font-bold text-gray-800 mb-6 text-2xl">Give it a try & find your next ride!</p>

                <div class="bg-stone-100 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                        <div class="text-gray-900">
                            <p class="font-bold text-2xl">Personal Details</p>
                            <p class="text-lg font-bold"> Please fill out all the fields.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div class="md:col-span-5">
                <br/>
                    <div class="md:col-span-5 text-lg">
                        <label for="full_name">Full Name:
                        <input
                            type="text"
                            id="name"
                            placeholder="Full name"
                            autoComplete="off"
                            class="h-10 border mt-1 rounded px-4 w-full bg-stone-200"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                        </label>
                    </div>
                <br/>
                    <div class="md:col-span-5 text-lg">
                        <label for="username">Username:
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            placeholder="Simple is key!"
                            class="h-10 border mt-1 rounded px-4 w-full bg-stone-200"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}/>
                        </label>
                    </div>
                <br/>
                    <div class="md:col-span-5 text-lg">
                        <label for="birthdate">Birthdate:
                        <input
                            type="date"
                            id="birthdate"
                            placeholder="Your Birthday!"
                            class="h-10 border mt-1 rounded px-4 w-full bg-stone-200"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}/>
                        </label>    
                    </div>
                <br/>
                    <div class="md:col-span-5 text-lg">
                        <label for="city">City Name:
                        <input
                            type="city"
                            id="city"
                            placeholder="City Name"
                            autoComplete="off"
                            class="h-10 border mt-1 rounded px-4 w-full bg-stone-200"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}/>
                        </label>
                    </div>
                <br/>
                    <div class="md:col-span-5 text-lg">
                        <label for="state">State Abbreviation:                   
                        <input
                            type="state"
                            id="state"
                            placeholder="State Abbreviation(NY)"
                            autoComplete="off"
                            class="h-10 border mt-1 rounded px-4 w-full bg-stone-200"
                            value={state}
                            onChange={(e) => setState(e.target.value)}/>
                        </label>    
                    </div>

                <br/>
                    <div class="md:col-span-5 text-lg">
                        <label for="password">Password:                   
                        <input
                            type="password"
                            id="password"
                            placeholder="Create Password"
                            class="h-10 border mt-1 rounded px-4 w-full bg-stone-200"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"/>
                        </label>
                    </div>
                <br/>
                    <div class="md:col-span-5 text-lg">
                        <label for="passwordConfirmation">Password Confirmation:
                        <input
                            type="password"
                            id="password_confirmation"
                            placeholder="Confirm Password"
                            class="h-10 border mt-1 rounded px-4 w-full bg-stone-200"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            autoComplete="current-password"/>
                        </label>
                    </div>
                <br/>
                    <div class="md:col-span-5 text-right">
                        <div class="inline-flex items-end bg-rose-800 text-lg">
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




