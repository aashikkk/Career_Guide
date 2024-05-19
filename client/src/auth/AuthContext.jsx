/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useReducer, useState } from "react";
// import Cookies from "js-cookie";

const AuthContext = createContext(null);

const initialState = {
  user: sessionStorage.getItem("userData")
    ? JSON.parse(sessionStorage.getItem("userData"))
    : null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // console.log("This is action.payload from AuthContext  ", action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loggedIn = (userData) => {
    dispatch({ type: "LOGIN", payload: userData });
    sessionStorage.setItem("userData", JSON.stringify(userData));
  };

  const loggedOut = () => {
    dispatch({ type: "LOGOUT" });
    sessionStorage.removeItem("userData");
  };

  // useEffect(() => {
  //   const token = Cookies.get("token");
  //   console.log("This is token from AuthContext  ", token);
  //   if (token && (!user || user.token !== token)) {
  //     const userFromCookie = { isAuthenticated: true, token: token };
  //     setUser(userFromCookie);
  //   } else if (!token && user) {
  //     setUser(null);
  //   }
  // }, [user]);

  // const login = (userData) => {
  //   setUser(userData); // userData should include isAuthenticated and role
  //   Cookies.set("token", userData.token, {
  //     expires: 7,
  //     path: "/",
  //     secure: false,
  //     sameSite: "Strict",
  //   }); // Set cookie with a specific expiry and path
  // };

  // const logout = () => {
  //   Cookies.remove("token", { path: "/" }); // Ensure the path matches the one used when setting the cookie
  //   setUser(null);
  // };

  return (
    <AuthContext.Provider value={{ user: state.user, loggedIn, loggedOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
