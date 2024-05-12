import React from "react";
import { Card } from "flowbite-react";

function CounsellerAppBooking() {
	return (
		<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
			<h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-00 dark:text-white pb-7">
				Book the appointment to get your career to next level
			</h2>
			<Card className="flex items-center">
				<div className="flex flex-col items-center pb-10">
					<img
						alt="Bonnie image"
						height="96"
						src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.1369675164.1715472000&semt=ais_user"
						width="96"
						className="mb-3 rounded-full shadow-lg"
					/>
					<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
						Bonnie Green
					</h5>
					<span className="text-md text-gray-600 dark:text-gray-400">
						Visual Designer
					</span>
					<span className="text-sm text-gray-500 dark:text-gray-400">
						Visual Designer
					</span>
					<div className="mt-4 flex space-x-3 lg:mt-6">
						<a
							href="#"
							className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
							Book the Appointment
						</a>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default CounsellerAppBooking;
