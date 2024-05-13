import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import axios from "../axios";
import EventCard from "../components/HomeScreenComponents/EventCard";
import { useNavigate } from "react-router-dom";

function EventsPage() {
	const navigate = useNavigate();
	const [events, setEvents] = useState([]);

	const handleEventClick = (event) => {
		navigate("/events/desc", { state: { event: event } });
	};

	useEffect(() => {
		axios
			.get("/event/")
			.then((response) => {
				setEvents(response.data);
			})
			.catch((error) => {
				console.error("Error fetching events", error);
			});
	}, []);
	return (
		<div>
			<NavBar />
			<div className="mx-20 mt-10 px-10 pl-20">
				<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-00 dark:text-white ">
					<mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
						Events
					</mark>{" "}
					to enlighten you ✨
				</h2>
				<div className="grid lg:grid-cols-4 gap-4 py-20">
					{events.map((event) => (
						<EventCard
							key={event.id}
							date={event.date}
							time={event.time}
							title={event.title}
							location={event.location}
							onClick={() => {
								handleEventClick(event);
							}}
							style={{ cursor: "pointer" }}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default EventsPage;
