/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const token = Cookies.get("token");
		if (token) {
			// Assuming you store the user's role or other details in the cookie or another form of storage
			// You might need to validate the token with the server to get the user details
			const userFromCookie = { isAuthenticated: true, token: token };
			setUser(userFromCookie);
		}
	}, []);

	const login = (userData) => {
		setUser(userData); // userData should include isAuthenticated and role
		Cookies.set("token", userData.token, { expires: 7, path: "/" }); // Set cookie with a specific expiry and path
	};

	const logout = () => {
		Cookies.remove("token", { path: "/" }); // Ensure the path matches the one used when setting the cookie
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider, AuthContext };
