import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthSuccess() {
    const navigate = useNavigate();

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);

        const access = query.get("access");
        const refresh = query.get("refresh");
        const user = query.get("user");

        if (access && refresh) {
            localStorage.setItem("access_token", access);
            localStorage.setItem("refresh_token", refresh);
            localStorage.setItem("user", user);
            setTimeout(() => navigate("/"), 50);
        } else {
            navigate("/login"); // something went wrong
        }
    }, [navigate]);

    return <div>Logging you in...</div>;
}
