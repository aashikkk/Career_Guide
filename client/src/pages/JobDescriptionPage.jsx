import React from "react";
import JobDescriptionCard from "../components/JobDescriptionCard";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";

function JobDescriptionPage() {
	return (
		<div>
			<NavBar />
			<JobDescriptionCard />
			<FooterBar />
		</div>
	);
}

export default JobDescriptionPage;
