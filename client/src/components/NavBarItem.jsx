import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom"

export default function NavItem({ link, text }) {
    return <Link to={link}>{text}</Link>;
}
