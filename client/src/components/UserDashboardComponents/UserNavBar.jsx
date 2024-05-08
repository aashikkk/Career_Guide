import React from "react";
import { Navbar } from "flowbite-react";
import NavItem from "../NavBarItem";

function UserNavBar() {
	return (
		<div>
			<Navbar
				fluid
				className="bg-red-100">
				<Navbar.Collapse>
					<NavItem
						// link={"viewAppointments"}
						text={"View my Appointments"}
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

export default UserNavBar;
