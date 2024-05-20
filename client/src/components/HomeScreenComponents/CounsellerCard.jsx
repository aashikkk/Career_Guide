"use client";

import React from "react";
import { Avatar } from "flowbite-react";

function CounsellerCard({ name, specialization, educationLevel }) {
	return (
		<div>
			<Avatar
				img="../../assets/images/profile.png"
				rounded
				size="lg">
				<div className="space-xy-2 font-medium dark:text-white">
					<div>{name}</div>
					<div className="text-sm text-gray-500 dark:text-gray-400">
						{specialization}
					</div>
					{/* <div className="text-sm dark:text-gray-400">
						{educationLevel}
					</div> */}
				</div>
			</Avatar>
		</div>
	);
}

export default CounsellerCard;
