import React from "react";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";
import RegisterForm from "../components/LoginRegisterComponents/RegisterForm";

function RegisterPage() {
    return (
        <div>
            <NavBar />
            <RegisterForm />
            <FooterBar />
        </div>
    );
}

export default RegisterPage;
