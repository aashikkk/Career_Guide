import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ContactUsPage from "./pages/ContactUsPage";
import BlogsPage from "./pages/BlogsPage";
import JobsPage from "./pages/JobsPage";
import EventCalenderPage from "./pages/EventCalenderPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import RegisterSuccessPage from "./pages/RegisterSuccessPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import CounsellerDashboardPage from "./pages/CounsellerDashboardPage";
import EditableTable from "./components/TableEditable";
import ViewableTable from "./components/TableViewable";
import { useState, useEffect } from "react";
import StripePaymentPage from "./pages/StripePaymentPage";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <NotFoundPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "login",
				element: <LoginPage />,
			},
			{
				path: "register/",
				element: <RegisterPage />,
			},
			{
				path: "contactUs",
				element: <ContactUsPage />,
			},
			{
				path: "blogs",
				element: <BlogsPage />,
			},
			{
				path: "jobs",
				element: <JobsPage />,
			},
			{
				path: "events",
				element: <EventCalenderPage />,
			},
			{
				path: "register/success",
				element: <RegisterSuccessPage />,
			},
		],
	},
	{
		path: "/admin",
		element: <AdminDashboardPage />,
		children: [
			{
				index: true,
				element: <EditableTable />,
			},
			{
				path: "manageEvents",
				element: <EditableTable />,
			},
			{
				path: "manageResourcePersons",
				element: <EditableTable />,
			},
		],
	},
	{
		path: "/user",
		element: <UserDashboardPage />,
		children: [
			{
				index: true,
				element: <ViewableTable />,
			},
			{
				path: "viewAppointments",
				element: <ViewableTable />,
			},
		],
	},
	{
		path: "/counseller",
		element: <CounsellerDashboardPage />,
		children: [
			{
				index: true,
				element: <ViewableTable />,
			},
			{
				path: "viewAppointments",
				element: <ViewableTable />,
			},
		],
	},
	{
		path: "/pay",
		element: <StripePaymentPage />,
	},
]);

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	const authenticate = async () => {
		try {
			const token = localStorage.getItem("token");
			console.log(token);
			if (token) {
				setLoggedIn(true);
			} else {
				setLoggedIn(false);
			}
		} catch (err) {
			console.log(err);
			setLoggedIn(false);
		}
	};

	useEffect(() => {
		authenticate();
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("token");
		setLoggedIn(false);
	};

	return <RouterProvider router={router} />;
}

export default App;

// v5
{
	/* <Router>
    <Routes>
        <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="login" exact element={<LoginPage />} />
            <Route path="register" exact element={<RegisterPage />} />
            <Route path="contactUs" exact element={<ContactUsPage />} />
            <Route path="blogs" exact element={<BlogsPage />} />
            <Route path="jobs" exact element={<JobsPage />} />
            <Route path="events" exact element={<EventCalenderPage />} />
            <Route path="admin/" element={<AdminDashboardPage />}>
                <Route index element={<ContactForm />} path="manageEvents" />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    </Routes>
</Router>; */
}

// BrowserRouter as Router,
//     Route,
//     Routes,
