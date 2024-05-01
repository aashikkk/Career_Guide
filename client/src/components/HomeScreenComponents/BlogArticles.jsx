"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

function BlogArticles() {
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
                        name="viewAllBtn"
                    >
                        <Link to="/blogs">View All</Link>
                    </Button>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default BlogArticles;
