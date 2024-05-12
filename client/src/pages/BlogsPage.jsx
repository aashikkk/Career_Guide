import React from "react";
import NavBar from "../components/NavBar";
import BlogCompo from "../components/BlogsPageComponents/BlogComponent";
import FooterBar from "../components/FooterBar";
import BlogComponent from "../components/BlogsPageComponents/BlogComponent";

function BlogsPage() {
	return (
		<div>
			<NavBar />
			<BlogComponent />
			<FooterBar />
		</div>
	);
}

export default BlogsPage;
