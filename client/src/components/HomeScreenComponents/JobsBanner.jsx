import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "flowbite-react";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

function JobsBanner() {
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
		<div className=" mx-20 my-10 px-10 pl-20 ">
			<div className="flex flex-wrap ">
				<div className="font-bold text-black text-2xl flex-initial lg:flex-1 py-1 basis-3/4">
					Hot Jobs
				</div>
				<div>
					<Button
						outline
						gradientDuoTone="purpleToPink"
						name="viewAllBtn">
						<Link to="/jobs">View All</Link>
					</Button>
				</div>
			</div>
			<div className="mt-10">
				<div className="overflow-x-auto">
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
							{jobs.slice(0, 5).map((job) => (
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
		</div>
	);
}

export default JobsBanner;
