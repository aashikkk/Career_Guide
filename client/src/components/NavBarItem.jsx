import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NavItem({ link, onClick, className, text }) {
	return (
		<Link
			onClick={onClick}
			className={className}
			to={link}>
			{text}
		</Link>
	);
}
