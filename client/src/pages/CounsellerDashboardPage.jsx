import React from "react";
import NavBar from "../components/NavBar";
import GreetingUserBar from "../components/GreetingUserBar";
import { Outlet } from "react-router-dom";
import CounsellerNavBar from "../components/CounsellerComponents/CounsellerNavBar";
import { AuthContext } from "../auth/AuthContext";
import { useContext } from "react";

function CounsellerDashboardPage() {
	const { user } = useContext(AuthContext);
	return (
		<div>
			<NavBar />
			<GreetingUserBar name={user ? user.name : "User"} />
			<CounsellerNavBar />
			<Outlet />
		</div>
	);
}

export default CounsellerDashboardPage;
