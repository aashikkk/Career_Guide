/* eslint-disable react/prop-types */
import React from "react";

function BlogCard({ title, description, coverPic, onClick, style }) {
	return (
		<div>
			<a
				// href="#"
				onClick={onClick}
				style={style}
				// className="bg-white dark:border-gray-700 dark:bg-gray-800"
				className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
				<article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
					<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						<a>{title}</a>
					</h2>
					<p className="mb-5 font-light text-gray-500 dark:text-gray-400">
						{description.substring(0, 150)}
					</p>
					<div className="flex justify-between items-center">
						<a
							href="desc"
							className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
							Read more
							<svg
								className="ml-2 w-4 h-4"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"></path>
							</svg>
						</a>
					</div>
				</article>
			</a>
		</div>
	);
}

export default BlogCard;

{
	/* <img
					className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
					src="https://m.media-amazon.com/images/I/81B7hgDu4xL._AC_UF1000,1000_QL80_.jpg"
					alt=""
				/> */
}
{
	/* <div className="flex flex-col justify-between p-4 leading-normal">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{title}
					</h5>
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						{description.substring(0, 150)}
					</p>
				</div> */
}
