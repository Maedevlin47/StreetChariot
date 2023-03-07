import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPic from './LoginPic';
import CreateAccBtn from './CreateAccBtn';



function Login({ user, setUser, createAccBtn} ) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])

    console.log(user)

    let navigate = useNavigate()


    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    navigate('/userhome')
                })
            } else {
                r.json().then(json => {
                    console.log(json)
                    setErrors(json.error)
                })
            }
        });
        setTimeout(() =>{
            setUsername("")
            setPassword("")
            setErrors("")
            }, 1000)
    }

    return (
        <body className="font-['Quicksand'] min-h-screen">
            		{/* <!-- Container --> */}
            <div class="container mx-auto max-w-sm"> 
                <div class="flex justify-center my-13">
                {/* <!-- Row --> */}
                <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                {/* <!-- Col --> */}
            <div>         
                <LoginPic class="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"></LoginPic>                
            </div>
            {/* <!-- Col --> */}

            <div class="w-full lg:w-1/2 bg-rose-300 p-5 rounded-lg lg:rounded-l-none text-neutral-900">
                <h3 class="pt-4 pb-2 bold text-2xl text-center text-neutral-900">Welcome Back!</h3>

                {/* <div className = "pt-10 pb-10" style={{ backgroundColor: "rgba(255, 255, 255, 0.160)" }}> */}
                <form className="px-8 pt-6 pb-8 mb-4 bg-stone-200 rounded text-neutral-900" onSubmit={handleSubmit}>
                    <div class="mb-4">
                        <label class="block mb-2 text-m font-bold text-gray-900" for="username">
                        Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            class="w-full px-3 py-2 text-m leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div class="mb-4">
                        <label class="block mb-2 text-m font-bold text-gray-800" for="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            class="w-full px-3 py-2 text-m leading-tight text-gray-800 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    <div class=" md:col-span-5 text-right pt-7 font-['Quicksand']">
                        <div class="inline-block items-end text-lg btn bg-rose-800">
                            <button className="opacity-00 hover:opacity-50 text-white font-bold py-2 px-4" type="submit">LOGIN</button>
                        
                        </div>

                    </div>
                    </div>
                    <div class="mb-4 text-center font-['Quicksand']">
						<input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
						<label class="text-m" for="checkbox_id">Remember Me</label>
                    </div>
                    <br></br>
                    <div class="font-['Quicksand'] text-m bold text-center pt-10">
                        No Account?  No problem!
                    </div>
                    <CreateAccBtn/>
                </form>
                {errors? <div className = "error-message">{errors}</div>: null}
            </div>
            </div>
            </div>
        </div>
    </body>

    )
}
export default Login;


