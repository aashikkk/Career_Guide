"use client";

import React from "react";
import { Card } from "flowbite-react";

function EventCard({ date, time, title, location }) {
	return (
		<div>
			<Card className="max-w-sm">
				<div>
					{date}, {time}
				</div>
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<p className="font-normal italic text-gray-700 dark:text-gray-400">
					{location}
				</p>
			</Card>
		</div>
	);
}

export default EventCard;
