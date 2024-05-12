import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import axios from "../axios";
import { Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function JobsPage() {
	const navigate = useNavigate();
	const [jobs, setJobs] = useState([]);

	const handleJobClick = (job) => {
		navigate("/jobs/desc", { state: { job: job } });
	};

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
	return (
		<div>
			<NavBar />
			<div className="overflow-x-auto w-10/12  mx-auto mt-7">
				<Table hoverable>
					<Table.Head>
						{jobs.length > 0 &&
							Object.keys(jobs[0]).map(
								(key) =>
									!["id", "description"].includes(key) && (
										<Table.HeadCell key={key}>{key}</Table.HeadCell>
									)
							)}
					</Table.Head>
					<Table.Body className="divide-y">
						{jobs.map((job) => (
							<Table.Row
								key={job.id}
								className="bg-white dark:border-gray-700 dark:bg-gray-800"
								onClick={() => {
									handleJobClick(job);
								}}
								style={{ cursor: "pointer" }}>
								{Object.keys(job).map(
									(key) =>
										!["id", "description"].includes(key) && (
											<Table.Cell key={key}>{job[key]}</Table.Cell>
										)
								)}
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</div>
		</div>
	);
}

export default JobsPage;
