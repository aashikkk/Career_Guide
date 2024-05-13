import React from "react";
import { useLocation } from "react-router-dom";

function BlogDescriptionPage() {
	const location = useLocation();
	const selectedBlog = location.state.blog;

	return (
		<div>
			<main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
				<div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
					<article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
						<header className="mb-4 lg:mb-6 not-format">
							<h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
								{selectedBlog.title}
							</h1>
						</header>
						<p className="lead">{selectedBlog.description}</p>
					</article>
				</div>
			</main>
		</div>
	);
}

export default BlogDescriptionPage;

{
	/* <form className="mb-6">
								<div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
									<label
										htmlFor="comment"
										className="sr-only">
										Your comment
									</label>
									<textarea
										id="comment"
										rows="6"
										className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
										placeholder="Write a comment..."
										required></textarea>
								</div>
								<button
									type="submit"
									className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
									Post comment
								</button>
							</form> */
}
