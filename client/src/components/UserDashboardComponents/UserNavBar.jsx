import React from "react";
import { Navbar } from "flowbite-react";
import NavItem from "../NavBarItem";
import handleLogout from "../../App";

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
					{
						<NavItem
							onClick={handleLogout}
							link={"/login"}
							text={"Logout"}
						/>
					}
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default UserNavBar;
