import React, { useState } from "react";

function Login({ user, setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])

    console.log(user)

    // let navigate = useNavigate()


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
                    // navigate('/home')
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
        <div className="Login">
        <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
        </form>
        {errors? <div className = "error-message">{errors}</div>: null}

    </div>



    )
}
export default Login;