import { useState} from "react";
import EditAccPic from './EditAccPic';

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


    return (

    <div class="min-h-screen p-0 bg-rose-300 flex items-top justify-center font-['Quicksand']">
            <div class="flex justify-center ">
                {/* <!-- Row --> */}
            <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                {/* <!-- Col --> */}
            <div>
                <EditAccPic class=""></EditAccPic>
            </div>
        <div class="container max-w-screen-lg pt-20 pl-4">
            <h2 class="font-bold text-4xl text-gray-900 pt-5 pb-20">Edit Your Account!</h2>

            <div class="w-full p-5 lg:w-1/2 bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div class="text-gray-900">
                        <p class="font-bold text-2xl">Personal Details:</p>
                        <p class="text-lg font-bold">Update and Safe!</p>
                    </div>
                    <form className = "editform" onSubmit = {handleSubmitAccount}>
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-5">
                        <br/>
                            <div class="md:col-span-5 text-lg">
                                <label for="full_name">Full Name:
                                    <input 
                                        type="text" 
                                        name="name"
                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                        value={accountData.name} 
                                        onChange={handleAccountChange} />
                                </label>
                            </div>
                        <br />
                            <div>
                                <label class="md:col-span-5 text-lg">User Name:
                                    <input 
                                    type="text" 
                                    name="username"
                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                    value={accountData.username} 
                                    onChange={handleAccountChange} />
                                </label>
                            </div>
                        <br />
                            <div>    
                                <label class="md:col-span-5 text-lg">City Name:
                                    <input 
                                    type="text" 
                                    name="city"
                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                    value={accountData.city} 
                                    onChange={handleAccountChange} />
                                </label>
                            </div>
                        <br />
                            <div>
                                <label class="md:col-span-5 text-lg"> State Name:
                                    <input 
                                    type="text" 
                                    name="state"
                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                    value={accountData.state} 
                                    onChange={handleAccountChange} />
                                </label>
                            </div>
                        <br />
                            <div>
                                <label class="md:col-span-5 text-lg"> Password:
                                    <input 
                                    type="text" 
                                    name="password"
                                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                    value={accountData.password} 
                                    onChange={handleAccountChange} />
                                </label>
                            </div>
                        <br />
                            <div class="md:col-span-5 text-center animate-bounce w-3 h-3 text-justify pt-10 pb-16 mx-40">
                                <div class="btn-circle btn-horizontal w-40 bg-rose-800 text-lg">
                                    <button class="opacity-100 hover:opacity-50 text-white font-bold py-2 px-4 rounded"
                                        type="submit">
                                        Save Profile</button>
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
    </div>

    )
}

export default UserProfile;

