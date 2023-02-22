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
        <div className="logout">
            <h1>Are you sure you want to log off?</h1>
            <button className="logoutbutton" onClick={handleLogoutClick}>Log Out</button>
        </div>
    );
}
export default LogOut;