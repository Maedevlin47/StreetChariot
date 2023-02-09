import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPic from './LoginPic';

// import 'tailwindcss/tailwind.css';



function Login({ user, setUser }) {
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
        <body>
            <section class="min-h-screen flex items-stretch text-white">
            <LoginPic class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center">
                <div class="bg-fixed opacity-60 inset-0 z-0 px-24 position-absolute min-h-screen w-full">
                    <h1 class="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
                    <p class="text-3xl my-4">Capture your personal memory in unique way, anywhere.</p>
                </div>
            </LoginPic>                
                
                
                
                <div className = "pt-10 pb-10" style={{ backgroundColor: "rgba(255, 255, 255, 0.160)" }}>
                <form className="" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>Username</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="signinbtn" type="submit">Login</button>
                </form>
                {errors? <div className = "error-message">{errors}</div>: null}

            </div>
            {/* </div> */}
        </section>
    </body>


    )
}
export default Login;


