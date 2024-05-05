import React from "react";
import NavBar from "../components/NavBar";
import AdminNavBar from "../components/AdminNavBar";
import GreetingUserBar from "../components/GreetingUserBar";
import { Outlet } from "react-router-dom";

function AdminDashboardPage() {
    return (
        <div>
            <NavBar />
            <GreetingUserBar />
            <AdminNavBar />
            <Outlet />
        </div>
    );
}

export default AdminDashboardPage;
