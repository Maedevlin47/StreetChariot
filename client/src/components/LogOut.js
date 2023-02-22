import { useNavigate } from 'react-router-dom'

function LogOut({user, setUser}) {
    let navigate = useNavigate()

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
            setUser(null);
            navigate("/login")
        }
        });
    }

    console.log(user)
    return (
    <div class="mt-12 bg-red-400 flex items-center justify-top font-['Quicksand']">
        <div class="container max-w-screen-lg max-h-screen-mx-auto">
            <div class="bg-white w-screen rounded shadow-lg md:p-8 mb-40 mt-40">
            <div>
            <br/>
            <br/>
                <h2 class="font-bold text-3xl text-gray-900 pl-5">Are you sure?</h2>
                <br/>
                    <div className="md:col-span-5 text-center animate-bounce">
                        <div class="btn-circle w-60 inline-block bg-red-800 text-xl">
                            <button className="justify-center opacity-100 hover:opacity-30 text-white pt-2 py-py px-4" onClick={handleLogoutClick}>Log Out</button>
                        </div>
                    </div>
                <br/>
                <br/>
                <h2 class="font-bold text-3xl text-right text-gray-900 pr-5">See you soon!</h2>
            </div>
            </div>
        </div>    
    </div>
    );
}
export default LogOut;