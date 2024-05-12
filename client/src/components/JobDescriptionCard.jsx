import React from "react";
import { Card } from "flowbite-react";
import { useLocation } from "react-router-dom";

function JobDescriptionCard() {
	const location = useLocation();
	const selectedJob = location.state.job;
	return (
		<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
			<h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-00 dark:text-white pb-7">
				Job Details
			</h2>
			<Card className="flex ">
				<div className="flex flex-col  pb-10">
					<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">
						{selectedJob.jobTitle}
					</h5>
					<h6 className="text-md text-center text-gray-600 dark:text-gray-400">
						{selectedJob.company}
					</h6>
					<span className="text-sm text-gray-500 dark:text-gray-400 pb-5 text-center">
						{selectedJob.location}
					</span>

					<span className="text-md text-black-500 dark:text-black-400">
						{selectedJob.description}
					</span>
				</div>
			</Card>
		</div>
	);
}

export default JobDescriptionCard;
