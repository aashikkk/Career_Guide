import React, { useContext } from "react";
import { Navbar } from "flowbite-react";
import NavItem from "../NavBarItem";
import { AuthContext } from "../../auth/AuthContext";

function CounsellerNavBar() {
	const { loggedOut } = useContext(AuthContext);
	// const handleLogout = () => {
	// 	logout();
	// 	navigate("/login");
	// };
	return (
		<div className="w-full">
			<Navbar
				fluid
				className="bg-red-100 w-full ">
				<Navbar.Collapse className="md:w-full ">
					<NavItem
						text={"View my Appointments"}
						className={"mx-5"}
					/>
					{/* <NavItem
						onClick={handleLogout}
						// link={"logout"}
						text={"Logout"}
					/> */}
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default CounsellerNavBar;
