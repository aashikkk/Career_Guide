import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

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
                    <Link to="/">Career Guide</Link>
                </span>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Link to="/">Home</Link>
                {/* <Link to="/about">About</Link> */}
                <Link to="/blogs">Blogs</Link>
                <Link to="/contactUs">Contact Us</Link>
                <Link to="/login">Login</Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;

{
    /* <Navbar.Link href="#" active> */
    /* active should be according to url */
    /* Home */
    /* </Navbar.Link> */
}
