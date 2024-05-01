import React from "react";
import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactPageComponents/ContactForm";
import FooterBar from "../components/FooterBar";

function ContactUsPage() {
    return (
        <div>
            <NavBar />
            <ContactForm />
            <FooterBar />
        </div>
    );
}

export default ContactUsPage;
