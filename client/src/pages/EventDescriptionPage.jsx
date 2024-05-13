import React from "react";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";
import EventDescriptionCard from "../components/EventDescriptionCard";

function EventDescriptionPage() {
	return (
		<div>
			<NavBar />
			<EventDescriptionCard />
			<FooterBar />
		</div>
	);
}

export default EventDescriptionPage;
