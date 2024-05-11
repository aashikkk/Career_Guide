import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import { Button } from "flowbite-react";
import axios from "../../axios";

function EventCalender() {
	const [events, setEvents] = useState([]);

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
		<div className="mx-20 mt-10 px-10 pl-20">
			<div className="flex flex-wrap ">
				<div className="font-bold text-black text-2xl flex-initial lg:flex-1 py-1 basis-3/4">
					Event Calender
				</div>
				<div>
					<Button
						gradientDuoTone="purpleToPink"
						outline
						name="viewAllBtn">
						<Link to="/events">View All</Link>
					</Button>
				</div>
			</div>
			<div className="grid lg:grid-cols-4 gap-4 py-20">
				{events.map((event) => (
					<EventCard
						key={event.id}
						date={event.date}
						time={event.time}
						title={event.title}
						location={event.location}
					/>
				))}
				{/* <EventCard />
				<EventCard />
				<EventCard /> */}
			</div>
		</div>
	);
}

export default EventCalender;
