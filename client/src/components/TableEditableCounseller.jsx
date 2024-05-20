import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import axios from "../axios";

function EditableTableCounseller() {
	const [counsellor, setCounsellor] = useState([]);

	useEffect(() => {
		axios
			.get("/api/user/category/COUNSELLOR")
			.then((response) => {
				setCounsellor(response.data);
			})
			.catch((error) => {
				console.error("Error fetching counsellor", error);
			});
	}, []);

	const handleDelete = (counsellorId) => {
		axios
			.delete(`/api/user/category/COUNSELLOR/${counsellorId}`)
			.then((response) => {
				setCounsellor(
					counsellor.filter((counsellor) => counsellor.id !== counsellorId)
				);
			})
			.catch((error) => {
				console.error("Error deleting counsellor", error);
			});
	};

	return (
		<div className="overflow-x-auto py-12 mx-auto w-11/12">
			<div className="flex justify-end pb-3">
				<button
					onClick={() => (window.location.href = `counseller/create`)} // Navigate to your create route
					className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
					Create
				</button>
			</div>
			{counsellor.length > 0 ? (
				<Table striped>
					<Table.Head>
						{Object.keys(counsellor[0]).map(
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
							<span className="sr-only">Edit</span>
						</Table.HeadCell>
						<Table.HeadCell>
							<span className="sr-only">Delete</span>
						</Table.HeadCell>
					</Table.Head>
					<Table.Body className="divide-y">
						{counsellor.map((counsellor) => (
							<Table.Row
								key={counsellor.id}
								className="bg-white dark:border-gray-700 dark:bg-gray-800">
								{Object.keys(counsellor).map(
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
											<Table.Cell key={key}>{counsellor[key]}</Table.Cell>
										)
								)}

								<Table.Cell>
									<a
										href={`/admin/counseller/update/${counsellor.id}`} // Replace with your edit route
										className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
										Edit
									</a>
								</Table.Cell>
								<Table.Cell>
									<button
										onClick={() => handleDelete(counsellor.id)}
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

export default EditableTableCounseller;
