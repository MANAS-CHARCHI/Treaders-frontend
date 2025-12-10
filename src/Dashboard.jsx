import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiFetch } from "./api";
export default function Dashboard() {
    const navigate = useNavigate();

    const logout = async () => {
        const response = await apiFetch("http://localhost:5001/api/user/logout", {
            method: "POST",
            credentials: "include"
        });
        console.log(response);
        if (!response.ok) {
            console.error("Logout failed");
            return;
        }
        navigate("/login", { replace: true });
    };
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            navigate("/login", { replace: true });
        }
    }, [navigate]);
    if (!user) {
        return <div>Loading...</div>;
    }
    const testValidate = async () => {
        const response = await apiFetch("http://localhost:5001/api/user/test-validate", {
            method: "GET",
            credentials: "include"
        });
        const data = await response.json();
        console.log(data);
    }
    return (
        <div>
            <h2>Welcome to the Dashboard</h2>
            <p>You are successfully logged in! {user.name}</p>
            {console.log(user.avatar)}
            <img
                src={user.avatar || "https://media.istockphoto.com/id/1195743934/vector/cute-panda-character-vector-design.jpg?s=612x612&w=0&k=20&c=J3ht-bKADmsXvF6gFIleRtfJ6NGhXnfIsrwlsUF8w80="}
                alt="Profile Avatar"
                style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginBottom: "10px"
                }}
            />
            <button onClick={logout}>
                Logout
            </button>
            <button onClick={testValidate} style={{ marginLeft: "10px" }}>
                Test Validate
            </button>
        </div>
    );
}
