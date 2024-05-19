import React, { useState, useEffect, useContext } from "react";
import { Table } from "flowbite-react";
import axios from "../axios";
import { AuthContext } from "../auth/AuthContext";

function ViewableTableCounsellor() {
	const { user } = useContext(AuthContext);
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		axios
			.get("/api/appointment/")
			.then((response) => {
				setAppointments(response.data);
			})
			.catch((error) => {
				console.error("Error fetching appointments", error);
			});
	}, [user]);

	return (
		<div className="overflow-x-auto px-15 py-12 mx-auto w-11/12">
			{appointments.length > 0 &&
			appointments.some(
				(appointment) => appointment.resourcePerson === user.name
			) ? (
				<Table striped>
					<Table.Head>
						{Object.keys(appointments[0]).map(
							(key) =>
								!["id", "resourcePerson"].includes(key) && (
									<Table.HeadCell key={key}>{key}</Table.HeadCell>
								)
						)}
					</Table.Head>
					<Table.Body className="divide-y">
						{appointments
							.filter((appointment) => appointment.resourcePerson === user.name)
							.map((appointment) => (
								<Table.Row
									key={appointment.id}
									className="bg-white dark:border-gray-700 dark:bg-gray-800">
									{Object.keys(appointment).map(
										(key) =>
											!["id", "resourcePerson"].includes(key) && (
												<Table.Cell key={key}>{appointment[key]}</Table.Cell>
											)
									)}
								</Table.Row>
							))}
					</Table.Body>
				</Table>
			) : (
				<p>No appointment found for you.</p>
			)}
		</div>
	);
}

export default ViewableTableCounsellor;
