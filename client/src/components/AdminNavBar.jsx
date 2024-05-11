import React from "react";
import { Navbar } from "flowbite-react";
import NavItem from "./NavBarItem";

function AdminNavBar() {
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
						link={"logout"}
						text={"Logout"}
					/>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default AdminNavBar;
