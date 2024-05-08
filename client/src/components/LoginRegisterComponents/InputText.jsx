import React, { useEffect } from "react";
// import { Input, Ripple, initTWE } from "tw-elements";

function InputText({
	type,
	placeholder,
	value,
	inputHtmlFor,
	onChange,
	labelName,
	error,
}) {
	// useEffect(()=>{
	//     initTWE({ Input, Ripple });
	// })

	const handleChange = (e) => {
		if (onChange) {
			onChange(e.target.value);
		}
	};

	return (
		<div
			className="relative mb-6"
			data-twe-input-wrapper-init>
			<input
				type={type}
				className="peer block min-h-[auto] w-full rounded border  bg-gray-50 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
			/>
			<label
				htmlFor={inputHtmlFor}
				className="block mb-2 text-m font-medium pointer-events-none absolute left-3 top-0 max-w-[90%] origin-[0_0] pt-[0.37rem] leading-[2.15] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
				{labelName}
			</label>
			{error && <p className="text-red-500 mt-1">{error}</p>}
		</div>
	);
}

export default InputText;
