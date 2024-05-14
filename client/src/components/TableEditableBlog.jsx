import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import axios from "../axios";

function EditableTableBlog() {
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

	const handleDelete = (blogId) => {
		axios
			.delete(`/blog/${blogId}`)
			.then((response) => {
				setBlogs(blogs.filter((blog) => blog.id !== blogId));
			})
			.catch((error) => {
				console.error("Error deleting blog", error);
			});
	};

	return (
		<div className="overflow-x-auto  py-12 mx-auto w-11/12">
			<div className="flex justify-end pb-3">
				<button
					// onClick={() => (window.location.href = `event/${event.id}`)} // Navigate to your create route
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Create
				</button>
			</div>
			<Table striped>
				<Table.Head>
					{blogs.length > 0 &&
						Object.keys(blogs[0]).map(
							(key) =>
								key !== "id" && <Table.HeadCell key={key}>{key}</Table.HeadCell>
						)}

					<Table.HeadCell>
						<span className="sr-only">Edit</span>
					</Table.HeadCell>
					<Table.HeadCell>
						<span className="sr-only">Delete</span>
					</Table.HeadCell>
				</Table.Head>
				<Table.Body className="divide-y">
					{blogs.map((blog) => (
						<Table.Row
							key={blog.id}
							className="bg-white dark:border-gray-700 dark:bg-gray-800">
							{Object.keys(blog).map((key) => {
								if (key !== "id") {
									const value = blog[key];
									// Check if the value is an object and convert it to a string or handle it appropriately
									const displayValue =
										typeof value === "object" ? JSON.stringify(value) : value;
									return <Table.Cell key={key}>{displayValue}</Table.Cell>;
								}
								return null;
							})}

							<Table.Cell>
								<a
									href={`event/${blog.id}`} // Replace with your edit route
									className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
									Edit
								</a>
							</Table.Cell>
							<Table.Cell>
								<button
									onClick={() => handleDelete(blog.id)}
									className="font-medium text-red-600 hover:underline dark:text-red-500">
									Delete
								</button>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		</div>
	);
}

export default EditableTableBlog;
