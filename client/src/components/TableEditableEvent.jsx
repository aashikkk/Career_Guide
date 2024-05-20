import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import axios from "../axios";

function EditableTableEvent() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		axios
			.get("/api/event/")
			.then((response) => {
				setEvents(response.data);
			})
			.catch((error) => {
				console.error("Error fetching events", error);
			});
	}, []);

	const handleDelete = (eventId) => {
		axios
			.delete(`/api/event/${eventId}`)
			.then((response) => {
				setEvents(events.filter((event) => event.id !== eventId));
			})
			.catch((error) => {
				console.error("Error deleting event", error);
			});
	};

	return (
		<div className="overflow-x-auto py-12 mx-auto w-11/12">
			<div className="flex justify-end pb-3">
				<button
					onClick={() => (window.location.href = "event/create")} // Navigate to your create route
					className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
					Create
				</button>
			</div>
			{events.length > 0 ? (
				<Table striped>
					<Table.Head>
						{Object.keys(events[0]).map(
							(key) =>
								key !== "id" && <Table.HeadCell key={key}>{key}</Table.HeadCell>
						)}
						<Table.HeadCell>
							<span className="sr-only">Edit</span>
						</Table.HeadCell>
						<Table.HeadCell>
							<span className="sr-only">Delete</span>
						</Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						{events.map((event) => (
							<Table.Row
								key={event.id}
								className="bg-white dark:border-gray-700 dark:bg-gray-800">
								{Object.keys(event).map(
									(key) =>
										key !== "id" && (
											<Table.Cell key={key}>{event[key]}</Table.Cell>
										)
								)}
								<Table.Cell>
									<a
										href={`event/update/${event.id}`} // Replace with your edit route
										className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
										Edit
									</a>
								</Table.Cell>
								<Table.Cell>
									<button
										onClick={() => handleDelete(event.id)}
										className="font-medium text-red-600 hover:underline dark:text-red-500">
										Delete
									</button>
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			) : (
				<div className="text-center py-8">
					<span className="text-gray-500">No records found.</span>
				</div>
			)}
		</div>
	);
}

export default EditableTableEvent;
