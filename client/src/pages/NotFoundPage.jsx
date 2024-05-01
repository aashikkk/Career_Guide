import React from "react";
import NavBar from "../components/NavBar";
import NotFound from "../components/NotFound";
import FooterBar from "../components/FooterBar";

function NotFoundPage() {
    return (
        <div>
            {/* <NavBar /> */}
            <NotFound />
            <FooterBar />
        </div>
    );
}

export default NotFoundPage;
