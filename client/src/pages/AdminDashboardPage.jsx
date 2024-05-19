import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import AdminNavBar from "../components/AdminNavBar";
import GreetingUserBar from "../components/GreetingUserBar";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

function AdminDashboardPage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <NavBar />
      <GreetingUserBar name={user ? user.name : "User"} />
      <AdminNavBar />
      <Outlet />
    </div>
  );
}

export default AdminDashboardPage;
