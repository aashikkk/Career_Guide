import React, { useEffect, useState } from "react";
import BlogCard from "../HomeScreenComponents/BlogCard";
import axios from "../../axios";

function BlogComponent() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		axios
			.get("/blog/")
			.then((response) => {
				setBlogs(response.data);
			})
			.catch((error) => {
				console.error("Error fetching blogs", error);
			});
	}, []);
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
					<h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
						Our{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-red-400">
							Blog
						</span>
					</h2>
				</div>
				<div className="grid lg:grid-cols-3 gap-4 mt-7">
					{blogs.map((blog) => (
						<BlogCard
							key={blog.id}
							title={blog.title}
							description={blog.description}
							coverPic={blog.coverPic}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default BlogComponent;

{
	/* <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
						<div className="flex justify-between items-center mb-5 text-gray-500">
							<span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
								Article
							</span>
							<span className="text-sm">14 days ago</span>
						</div>
						<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							<a href="#">Our first project with React</a>
						</h2>
						<p className="mb-5 font-light text-gray-500 dark:text-gray-400">
							Static websites are now used to bootstrap lots of websites and are
							becoming the basis for a variety of tools that even influence both
							web designers and developers influence both web designers and
							developers.
						</p>
						<div className="flex justify-between items-center">
							<div className="flex items-center space-x-4">
								<img
									className="w-7 h-7 rounded-full"
									src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
									alt="Bonnie Green avatar"
								/>
								<span className="font-medium dark:text-white">
									Bonnie Green
								</span>
							</div>
							<a
								href="#"
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
					</article> */
}
