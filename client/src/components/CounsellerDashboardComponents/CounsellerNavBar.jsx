import React from "react";
import { Navbar } from "flowbite-react";
import NavItem from "../NavBarItem";

function CounsellerNavBar() {
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
					<NavItem
						className={""}
						link={"logout"}
						text={"Logout"}
					/>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default CounsellerNavBar;
