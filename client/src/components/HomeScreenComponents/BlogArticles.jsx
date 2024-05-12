import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import BlogCard from "./BlogCard";
import axios from "../../axios";

function BlogArticles() {
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
		<div className=" mx-20 mb-10 mt-20 px-10 pl-20 ">
			<div className="flex flex-wrap ">
				<div className="font-bold text-black text-2xl flex-initial lg:flex-1 py-1 basis-3/4">
					Blog Articles
				</div>
				<div>
					<Button
						outline
						gradientDuoTone="purpleToPink"
						name="viewAllBtn">
						<Link to="/blogs">View All</Link>
					</Button>
				</div>
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
	);
}

export default BlogArticles;
