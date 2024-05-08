import React from "react";
import NavBar from "../components/NavBar";
import GreetingUserBar from "../components/GreetingUserBar";
import { Outlet } from "react-router-dom";
import UserNavBar from "../components/UserDashboardComponents/UserNavBar";

function UserDashboardPage() {
	return (
		<div>
			<NavBar />
			<GreetingUserBar />
			<UserNavBar />
			<Outlet />
		</div>
	);
}

export default UserDashboardPage;
