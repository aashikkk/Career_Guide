import React from "react";
import { Card } from "flowbite-react";
import { useLocation } from "react-router-dom";

function EventDescriptionCard() {
	const location = useLocation();
	const selectedEvent = location.state.event;

	return (
		<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
			<h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-00 dark:text-white pb-7">
				<mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
					Event
				</mark>{" "}
				Details
			</h2>
			<Card className="flex ">
				<div className="flex flex-col  pb-10">
					<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white ">
						{selectedEvent.title}
					</h5>
					<h6 className="text-md text-gray-600 dark:text-gray-400">
						{selectedEvent.date} , {selectedEvent.time}
					</h6>
					<span className="text-sm text-gray-500 dark:text-gray-400">
						{selectedEvent.resourcePerson}
					</span>
					<span className="text-sm text-gray-500 dark:text-gray-400 pb-7 ">
						{selectedEvent.location}
					</span>

					<span className="text-md text-black-500 dark:text-black-400">
						{selectedEvent.details}
					</span>
				</div>
			</Card>
		</div>
	);
}

export default EventDescriptionCard;
