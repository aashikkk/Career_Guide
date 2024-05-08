import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NavItem({ link, className, text }) {
	return (
		<Link
			className={className}
			to={link}>
			{text}
		</Link>
	);
}
