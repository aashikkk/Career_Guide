import { Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import NavItem from "./NavBarItem";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../auth/AuthContext";
import axios from "../axios";

function NavBar() {
	const { user, loggedIn, loggedOut } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		const handleTokenExpiry = () => {
			loggedOut();
			navigate("/login");
		};

		document.addEventListener("token-expired", handleTokenExpiry);

		return () => {
			document.removeEventListener("token-expired", handleTokenExpiry);
		};
	}, [loggedOut, navigate]);

	const handleLoggedOut = async () => {
		try {
			const response = await axios.post("/api/logout");
			if (response.status === 200) {
				loggedOut();
				navigate("/login");
			}
		} catch (error) {
			console.error("Error logging out:", error);
		}
	};

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
				{user && user.isAuthenticated ? (
					<>
						{user.role === "ADMIN" && (
							<NavItem
								link={"/admin"}
								text={"Dashboard"}
							/>
						)}
						{user.role === "COUNSELLOR" && (
							<NavItem
								link={"/counseller"}
								text={"Dashboard"}
							/>
						)}
						{(user.role === "GRADUATE" ||
							user.role === "UNDERGRADUATE" ||
							user.role === "SCHOOL_STUDENT") && (
							<NavItem
								link={"/user"}
								text={"Dashboard"}
							/>
						)}
						<NavItem
							onClick={handleLoggedOut}
							text={"Log Out"}
						/>
					</>
				) : (
					<NavItem
						onClick={loggedIn}
						link={"/login"}
						text={"Login"}
					/>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBar;
