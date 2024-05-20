/* eslint-disable react/prop-types */
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth"; // Ensure you have the AuthContext set up

const ProtectedRoute = ({ children, allowedRoles }) => {
	const { user } = useAuth();
	console.log("ProtectedRoute -> user", user);
	const location = useLocation();

	if (!user || !user.isAuthenticated) {
		return (
			<Navigate
				to="/login"
				state={{ from: location }}
				replace
			/>
		);
	}

	// console.log("allowedRoles", allowedRoles);
	if (allowedRoles && !allowedRoles.includes(user.role)) {
		return (
			<Navigate
				to="/unauthorized"
				replace
			/>
		);
	}

	return children;
};

export default ProtectedRoute;
