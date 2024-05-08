import React from "react";
import { Link } from "react-router-dom";

function RegisterSuccess() {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<div className="flex justify-center">
						<img src="https://img.freepik.com/free-vector/verified-concept-illustration_114360-5138.jpg?t=st=1715062532~exp=1715066132~hmac=1e784f365a1dc6d0d2e0b5b015714ffd9b3b1ab76d9599d2d99afa3dd341ec41&w=826" />
					</div>
					<h1 className="mb-4 text-3xl tracking-tight font-extrabold lg:text-4xl text-gray-900 dark:text-primary-500">
						User Registered Successfully.
					</h1>
					{/* <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                        Whoops! That page doesn’t exist.
                    </p> */}
					{/* <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        Sorry, we can't find that page. You'll find lots to
                        explore on the home page.{" "}
                    </p> */}
					<a className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
						<Link to="/login">Login</Link>
					</a>
				</div>
			</div>
		</section>
	);
}

export default RegisterSuccess;
