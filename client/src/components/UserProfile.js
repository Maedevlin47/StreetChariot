import React from "react";
import { useState} from "react";

function UserProfile ({user, setUser}) {

    const [accountData, setAccountData] = useState({ name: '', username: '', city: '', state:'', password: ''})

    const handleAccountChange = (e) => {
        setAccountData({...accountData, [e.target.name]: e.target.value});

    }

    const handleSubmitAccount = (e) => {
        e.preventDefault();
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(accountData)
        })
            .then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    setUser(data);
                } )
            } else {
                r.json().then(console.warn);
            }
        })
    }
    console.log(setAccountData);

        //     .then((response) => {
        //         if (response.ok) {
        //     response.json())
        //     .then((data) => {
        //         console.log(...data);
        //     })
        //     .catch((error) => {
        //         console.log('Error:', error);
        //     });
        // }
        // }


    return (

    <div className="editaccout">
        <form onSubmit = {handleSubmitAccount}>
                <label>
                    Name:
                    <input type="text" name="name" value={accountData.name} onChange={handleAccountChange} />
                </label>
            <br />
                <label>
                    User Name:
                    <input type="text" name="username" value={accountData.username} onChange={handleAccountChange} />
                </label>
            <br />
                <label>
                    City Name:
                    <input type="text" name="city" value={accountData.city} onChange={handleAccountChange} />
                </label>
            <br />
                <label>
                    State Name:
                    <input type="text" name="state" value={accountData.state} onChange={handleAccountChange} />
                </label>
            <br />
                <label>
                    Password:
                    <input type="text" name="password" value={accountData.password} onChange={handleAccountChange} />
                </label>
            <button type="submit">Update Profile</button>
        </form>
    </div>

    )
}

export default UserProfile;
