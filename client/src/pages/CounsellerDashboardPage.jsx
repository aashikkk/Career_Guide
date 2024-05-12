import React from "react";
import NavBar from "../components/NavBar";
import GreetingUserBar from "../components/GreetingUserBar";
import { Outlet } from "react-router-dom";
import CounsellerNavBar from "../components/CounsellerComponents/CounsellerNavBar";

function CounsellerDashboardPage() {
	return (
		<div>
			<NavBar />
			<GreetingUserBar />
			<CounsellerNavBar />
			<Outlet />
		</div>
	);
}

export default CounsellerDashboardPage;
