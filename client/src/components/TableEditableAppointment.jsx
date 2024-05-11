import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import axios from "../axios";

function EditableTableAppointment() {
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		axios
			.get("/appointment/")
			.then((response) => {
				setAppointments(response.data);
			})
			.catch((error) => {
				console.error("Error fetching appointments", error);
			});
	}, []);

	const handleDelete = (appointmentId) => {
		axios
			.delete(`/appointment/${appointmentId}`)
			.then((response) => {
				setAppointments(
					appointments.filter((appointment) => appointment.id !== appointmentId)
				);
			})
			.catch((error) => {
				console.error("Error deleting event", error);
			});
	};

	return (
		<div className="overflow-x-auto py-12 mx-auto w-11/12">
			<Table striped>
				<Table.Head>
					{appointments.length > 0 &&
						Object.keys(appointments[0]).map(
							(key) =>
								key !== "id" && <Table.HeadCell key={key}>{key}</Table.HeadCell>
						)}
					<Table.HeadCell>
						<span className="sr-only">Create</span>
					</Table.HeadCell>
					<Table.HeadCell>
						<span className="sr-only">Edit</span>
					</Table.HeadCell>
					<Table.HeadCell>
						<span className="sr-only">Delete</span>
					</Table.HeadCell>
				</Table.Head>
				<Table.Body className="divide-y">
					{appointments.map((appointment) => (
						<Table.Row
							key={appointment.id}
							className="bg-white dark:border-gray-700 dark:bg-gray-800">
							{Object.keys(appointment).map(
								(key) =>
									key !== "id" && (
										<Table.Cell key={key}>{appointment[key]}</Table.Cell>
									)
							)}
							<Table.Cell>
								<a
									href={`event/${appointment.id}`} // Replace with your edit route
									className="font-medium text-blue-400 hover:underline dark:text-blue-500">
									Create
								</a>
							</Table.Cell>
							<Table.Cell>
								<a
									href={`appointment/${appointment.id}`} // Replace with your edit route
									className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
									Edit
								</a>
							</Table.Cell>
							<Table.Cell>
								<button
									onClick={() => handleDelete(appointment.id)}
									className="font-medium text-red-600 hover:underline dark:text-red-500">
									Delete
								</button>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		</div>
	);
}

export default EditableTableAppointment;
