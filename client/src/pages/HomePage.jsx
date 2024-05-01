import React from "react";
import BlogArticles from "../components/HomeScreenComponents/BlogArticles";
import CareerRegBanner from "../components/HomeScreenComponents/CareerRegBanner";
import CounsellerBanner from "../components/HomeScreenComponents/CounsellerBanner";
import EventCalender from "../components/HomeScreenComponents/EventCalender";
import FooterBar from "../components/FooterBar";
import JobsBanner from "../components/HomeScreenComponents/JobsBanner";
import NavBar from "../components/NavBar";

function HomePage() {
    return (
        <>
            <NavBar />
            <CareerRegBanner />
            <CounsellerBanner />
            <EventCalender />
            <JobsBanner />
            <BlogArticles />
            <FooterBar />
        </>
    );
}

export default HomePage;
