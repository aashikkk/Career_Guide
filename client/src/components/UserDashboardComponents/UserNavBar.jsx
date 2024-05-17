import React, { useContext } from "react";
import { Navbar } from "flowbite-react";
import NavItem from "../NavBarItem";
import { AuthContext } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";

function UserNavBar() {
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
						// link={"viewAppointments"}
						text={"View my Appointments"}
					/>
					{
						<NavItem
							onClick={handleLogout}
							// link={"/login"}
							text={"Logout"}
						/>
					}
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default UserNavBar;
