import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import NavItem from "./NavBarItem";
import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

function NavBar() {
	const { logout } = useContext(AuthContext);
	return (
		<Navbar
			fluid
			rounded>
			<Navbar.Brand as={"div"}>
				<Link to={"/"}>
					<img
						src="../../assets/images/CG_logowdbg.svg"
						className="mr-4 h-6 sm:h-9"
						alt="Career Guide Logo"
					/>
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
						<Link to="/">Career Guide</Link>
					</span>
				</Link>
			</Navbar.Brand>
			<Navbar.Collapse>
				<NavItem
					link={"/"}
					text={"Home"}
				/>
				<NavItem
					link={"/blogs"}
					text={"Blogs"}
				/>
				<NavItem
					link={"/contactUs"}
					text={"Contact Us"}
				/>
				<NavItem
					onClick={logout}
					link={"/login"}
					text={"Login"}
				/>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBar;
