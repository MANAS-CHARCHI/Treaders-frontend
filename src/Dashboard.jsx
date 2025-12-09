import { useNavigate } from "react-router-dom";
export default function Dashboard() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/login", { replace: true });
    };

    return (
        <div>
            <h2>Welcome to the Dashboard</h2>
            <p>You are successfully logged in!</p>

            <button onClick={logout}>
                Logout
            </button>
        </div>
    );
}
