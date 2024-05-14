import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import axios from "../axios";

function EditableTableJobs() {
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		axios
			.get("/job/")
			.then((response) => {
				setJobs(response.data);
			})
			.catch((error) => {
				console.error("Error fetching jobs", error);
			});
	}, []);

	const handleDelete = (jobId) => {
		axios
			.delete(`/job/${jobId}`)
			.then((response) => {
				setJobs(jobs.filter((job) => job.id !== jobId));
			})
			.catch((error) => {
				console.error("Error deleting job", error);
			});
	};

	return (
		<div className="overflow-x-auto py-12 mx-auto w-11/12">
			<div className="flex justify-end pb-3">
				<button
					onClick={() => (window.location.href = `job`)} // Navigate to your create route
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Create
				</button>
			</div>
			<Table striped>
				<Table.Head>
					{jobs.length > 0 &&
						Object.keys(jobs[0]).map(
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
					{jobs.map((job) => (
						<Table.Row
							key={job.id}
							className="bg-white dark:border-gray-700 dark:bg-gray-800">
							{Object.keys(job).map(
								(key) =>
									key !== "id" && <Table.Cell key={key}>{job[key]}</Table.Cell>
							)}
							<Table.Cell>
								<a
									href={`event/${job.id}`} // Replace with your edit route
									className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
									Edit
								</a>
							</Table.Cell>
							<Table.Cell>
								<button
									onClick={() => handleDelete(job.id)}
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

export default EditableTableJobs;
