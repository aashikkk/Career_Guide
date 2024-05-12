"use client";

import React from "react";
import { Avatar } from "flowbite-react";

function CounsellerCard({ name, specialization }) {
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
				</div>
			</Avatar>
		</div>
	);
}

export default CounsellerCard;
