import React, { useState, useEffect } from "react";
import { Dropdown, Ripple, initTWE } from "tw-elements";
import CounsellerCard from "./CounsellerCard";
import axios from "../../axios";

function CounsellerBanner() {
	initTWE({ Dropdown, Ripple });
	const [counseller, setCounseller] = useState([]);

	useEffect(() => {
		axios
			.get("/api/user/category/Counseller")
			.then((response) => {
				setCounseller(response.data);
			})
			.catch((error) => {
				console.error("Error fetching counseller", error);
			});
	}, []);

	return (
		<div className="mx-20 py-5">
			<div
				className="flex items-center justify-between p-6 lg:px-8 flex-wrap "
				name="searchAndSectorRow">
				<div className="font-bold text-black pr-40 flex-initial lg:flex-1 ">
					Book an appointment with one of our career counsellors
				</div>
				<div
					className="relative flex my-2"
					data-twe-input-wrapper-init
					data-twe-input-group-ref>
					<input
						type="search"
						className="peer block min-h-[auto] w-50 rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
						placeholder="Search"
						aria-label="Search"
						id="exampleFormControlInput"
						aria-describedby="basic-addon1"
					/>
					<label
						htmlFor="exampleFormControlInput"
						className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
						Search
					</label>
					<button
						className="relative z-[2] -ms-0.5 flex items-center rounded-e bg-primary-700 px-5  text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
						type="button"
						id="button-addon1"
						data-twe-ripple-init
						data-twe-ripple-color="light">
						<span className="[&>svg]:h-5 [&>svg]:w-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
								/>
							</svg>
						</span>
					</button>
				</div>
				<div
					className="lg:flex-2 lg:justify-end pl-5"
					data-twe-dropdown-position="dropend">
					<button
						className="flex items-center rounded bg-primary-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
						type="button"
						name="sectorDropDown"
						id="dropdownMenuButtonSector"
						data-twe-dropdown-toggle-ref
						aria-expanded="false"
						data-twe-ripple-init
						data-twe-ripple-color="light">
						Sector
						<span className="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path
									fillRule="evenodd"
									d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</button>
					<ul
						className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
						aria-labelledby="dropdownMenuButton1e"
						data-twe-dropdown-menu-ref>
						<li>
							<a
								className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
								href="#"
								data-twe-dropdown-item-ref>
								Action
							</a>
						</li>
						<li>
							<a
								className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
								href="#"
								data-twe-dropdown-item-ref>
								Another action
							</a>
						</li>
						<li>
							<a
								className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
								href="#"
								data-twe-dropdown-item-ref>
								Something else here
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 mt-7">
				{counseller.slice(0, 8).map((counseller) => (
					<CounsellerCard
						key={counseller.id}
						name={counseller.name}
						specialization={counseller.specialization}
					/>
				))}
			</div>
		</div>
	);
}

export default CounsellerBanner;
