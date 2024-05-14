import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import NavItem from "./NavBarItem";

function NavBar() {
	return (
		<Navbar
			fluid
			rounded>
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
					link={"/login"}
					text={"Login"}
				/>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBar;
