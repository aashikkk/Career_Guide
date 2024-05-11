import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import axios from "../axios";

function EditableTableCounseller() {
	const [counseller, setCounseller] = useState([]);

	useEffect(() => {
		axios
			.get("/user/category/Counseller")
			.then((response) => {
				setCounseller(response.data);
			})
			.catch((error) => {
				console.error("Error fetching counseller", error);
			});
	}, []);

	const handleDelete = (counsellerId) => {
		axios
			.delete(`/user/category/Counseller/${counsellerId}`)
			.then((response) => {
				setCounseller(
					counseller.filter((counseller) => counseller.id !== counsellerId)
				);
			})
			.catch((error) => {
				console.error("Error deleting counseller", error);
			});
	};

	return (
		<div className="overflow-x-auto py-12 mx-auto w-11/12">
			<Table striped>
				<Table.Head>
					{counseller.length > 0 &&
						Object.keys(counseller[0]).map(
							(key) =>
								![
									"id",
									"age",
									"password",
									"category",
									"grade",
									"currentYear",
									"GraduateYear",
								].includes(key) && (
									<Table.HeadCell key={key}>{key}</Table.HeadCell>
								)
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
					{counseller.map((counseller) => (
						<Table.Row
							key={counseller.id}
							className="bg-white dark:border-gray-700 dark:bg-gray-800">
							{Object.keys(counseller).map(
								(key) =>
									![
										"id",
										"age",
										"password",
										"category",
										"grade",
										"currentYear",
										"GraduateYear",
									].includes(key) && (
										<Table.Cell key={key}>{counseller[key]}</Table.Cell>
									)
							)}
							<Table.Cell>
								<a
									href={`event/${counseller.id}`} // Replace with your edit route
									className="font-medium text-blue-400 hover:underline dark:text-blue-500">
									Create
								</a>
							</Table.Cell>
							<Table.Cell>
								<a
									href={`/user/category/Counseller/${counseller.id}`} // Replace with your edit route
									className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
									Edit
								</a>
							</Table.Cell>
							<Table.Cell>
								<button
									onClick={() => handleDelete(counseller.id)}
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

export default EditableTableCounseller;
