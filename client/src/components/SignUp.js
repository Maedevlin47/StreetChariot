import {useState} from "react"

function SignUp ({user, setUser}) {


const [signupData,setSignupData] = useState ({
    fullname: "",
    username: "",
    birthdate: "",
    city: "",
    state: "",
    password: "",
    password_confirmation: ""
})
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(signupData),
        })
        .then((r) => {
            if (r.ok) {
            r.json()
            .then((user) => setUser(user));
            }
        });
        }

        console.log(user)

        const handleChange = (e) => {
            setSignupData({[e.target.name]: e.target.value})
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <br/>
                <label>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full name"
                    value={signupData.name}
                    onChange={handleChange}
                    // onChange={(e) => signupData(e.target.value)}
                />
                <br/>
                <label >Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="off"
                    placeholder="Something Easy to Remember! Can use your email without the @url"
                    value={signupData.username}
                    onChange={handleChange}
                    // onChange={(e) => signupData(e.target.value)}
                />
                <br/>
                <label>Birthdate:</label>
                <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    placeholder="Your Birthday!"
                    value={signupData.birthdate}
                    onChange={handleChange}
                    // onChange={(e) => signupData(e.target.value)}
                />
                <br/>
                <label >City:</label>
                <input
                    type="city"
                    id="city"
                    name="city"
                    placeholder="City Name"
                    value={signupData.city}
                    onChange={handleChange}
                    // onChange={(e) => signupData(e.target.value)}
                    />
                <br/>
                <label >State:</label>
                <input
                        type="state"
                        id="state"
                        name="state"
                        placeholder="State Name"
                        value={signupData.state}
                        onChange={handleChange}
                        // onChange={(e) => signupData(e.target.value)}
                />
                <br/>
                <label >Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Create Password"
                    value={signupData.password}
                    onChange={handleChange}
                    // onChange={(e) => signupData(e.target.value)}
                />
                <br/>
                <label >Password Confirmation:</label>
                <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    placeholder="Confirm Password"
                    value={signupData.password_confirmation}
                    onChange={handleChange}
                    // onChange={(e) => signupData(e.target.value)}
                />
                <br/>
                <button type="submit">Sign Up</button>
        </form>
        
        
        </div>

    )
}
export default SignUp;