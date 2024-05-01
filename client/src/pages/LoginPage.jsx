import React from "react";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";
import LoginForm from "../components/LoginRegisterComponents/LoginForm";

function LoginPage() {
    return (
        <div>
            <NavBar />
            <LoginForm />
            <FooterBar />
        </div>
    );
}

export default LoginPage;
