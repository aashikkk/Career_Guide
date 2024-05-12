import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { Ripple, initTWE } from "tw-elements";

function CareerRegBanner() {
	initTWE({ Ripple, Button });

	return (
		<div className="relative h-[420px] overflow-hidden rounded-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-cover bg-no-repeat text-center text-white ">
			<div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden  bg-fixed">
				<div className="flex pt-12 items-center justify-center">
					<div className="text-white">
						<h2 className="font-inter mb-4 text-4xl font-semibold">
							Career guidance tools for all
						</h2>
					</div>
				</div>
				<div className="flex justify-evenly px-12 pt-12 flex-wrap">
					<div>
						<img
							src="../../assets/images/schoolStudents.jpg"
							className="w-32 rounded-full shadow-lg"
							alt="Avatar"
						/>
						<h5 className="my-4 text-l text-gray-100 font-medium leading-tight">
							School Students
						</h5>
					</div>
					<div>
						<img
							src="../../assets/images/undergrad.jpg"
							className="w-32 rounded-full shadow-lg"
							alt="Avatar"
						/>
						<h5 className="my-4 text-l text-gray-100 font-medium leading-tight">
							Undergraduates
						</h5>
					</div>
					<div>
						<img
							src="../../assets/images/uni.jpg"
							className="w-32 rounded-full shadow-lg"
							alt="Avatar"
						/>
						<h5 className="my-4 text-l text-gray-100 font-medium leading-tight">
							Graduates
						</h5>
					</div>
				</div>
				<div className="pt-4">
					<button
						type="button"
						name="register"
						data-twe-ripple-init
						data-twe-ripple-color="light"
						className="inline-block rounded bg-primary-800 px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
						<Link to="/register"> Register Now </Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default CareerRegBanner;
