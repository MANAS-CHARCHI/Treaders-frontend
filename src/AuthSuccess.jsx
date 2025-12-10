import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthSuccess() {
    const navigate = useNavigate();

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);

        // backend passes user info
        const user = query.get("user");

        if (user) {
            // store user info only
            localStorage.setItem("user", user);

            setTimeout(() => navigate("/"), 50);
        } else {
            navigate("/login");
        }
    }, [navigate]);

    return <div>Logging you in...</div>;
}