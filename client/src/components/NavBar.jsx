"use client";

import { Navbar } from "flowbite-react";

function NavBar() {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <img
                    src="../../assets/images/CG_logowdbg.svg"
                    className="mr-4 h-6 sm:h-9"
                    alt="Career Guide Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Career Guide
                </span>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#about">About</Navbar.Link>
                <Navbar.Link href="#blogs">Blogs</Navbar.Link>
                <Navbar.Link href="#contactsUs">Contact Us</Navbar.Link>
                <Navbar.Link href="#login">Login</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
