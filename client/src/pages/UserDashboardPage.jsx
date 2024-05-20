import React from "react";
import NavBar from "../components/NavBar";
import GreetingUserBar from "../components/GreetingUserBar";
import { Outlet } from "react-router-dom";
import UserNavBar from "../components/UserDashboardComponents/UserNavBar";
import { AuthContext } from "../auth/AuthContext";
import { useContext } from "react";

function UserDashboardPage() {
	const { user } = useContext(AuthContext);
	return (
		<div>
			<NavBar />
			<GreetingUserBar name={user ? user.name : "User"} />
			<UserNavBar />
			<Outlet />
		</div>
	);
}

export default UserDashboardPage;
