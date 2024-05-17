import React, { useContext } from "react";
import { Navbar } from "flowbite-react";
import NavItem from "./NavBarItem";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

function AdminNavBar() {
	const { logout } = useContext(AuthContext);
	const navigate = useNavigate();
	const handleLogout = () => {
		logout();
		navigate("/login");
	};
	return (
		<div>
			<Navbar
				fluid
				className="bg-red-100">
				<Navbar.Collapse>
					<NavItem
						link={"manageEvents"}
						text={"Events"}
					/>
					<NavItem
						link={"manageResourcePersons"}
						text={"Resource Persons"}
					/>
					<NavItem
						link={"manageAppointments"}
						text={"Appointments"}
					/>
					<NavItem
						link={"manageBlogs"}
						text={"Blog"}
					/>
					<NavItem
						link={"manageJobs"}
						text={"Jobs"}
					/>
					<NavItem
						onClick={handleLogout}
						// link={"logout"}
						text={"Logout"}
					/>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default AdminNavBar;
