import React from "react";
import NavBar from "../components/NavBar";
import BlogCard from "../components/BlogsPageComponents/BlogCard";
import FooterBar from "../components/FooterBar";

function BlogsPage() {
    return (
        <div>
            <NavBar />
            <BlogCard />
            <FooterBar />
        </div>
    );
}

export default BlogsPage;
