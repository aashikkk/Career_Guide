import React from "react";

function GreetingUserBar({ name }) {
	return (
		<div className="py-2 px-5 text-end flex-wrap text-md font-medium text-indigo-700">
			Hello, {name}
		</div>
	);
}

export default GreetingUserBar;
