import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ContactUsPage from "./pages/ContactUsPage";
import BlogsPage from "./pages/BlogsPage";
import JobsPage from "./pages/JobsPage";
import EventsPage from "./pages/EventsPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import RegisterSuccessPage from "./pages/RegisterSuccessPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import CounsellerDashboardPage from "./pages/CounsellerDashboardPage";
import ViewableTable from "./components/TableViewable";
import { useState, useEffect } from "react";
import EditableTableEvent from "./components/TableEditableEvent";
import EditableTableCounseller from "./components/TableEditableCounseller";
import EditableTableAppointment from "./components/TableEditableAppointment";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import PaymentCancelPage from "./pages/PaymentCancelPage";
import EditableTableBlog from "./components/TableEditableBlog";
import EditableTableJobs from "./components/TableEditableJobs";
import CounsellerBookingPage from "./pages/CounsellerBookingPage";
import JobDescriptionPage from "./pages/JobDescriptionPage";
import BlogDescriptionPage from "./pages/BlogDescriptionPage";
import EventDescriptionPage from "./pages/EventDescriptionPage";
import Appointment from "./components/CreateUpdateForms/Appointment";
import Events from "./components/CreateUpdateForms/Events";
import Counseller from "./components/CreateUpdateForms/Counseller";
// import StripePaymentPage from "./pages/StripePaymentPage";

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
				element: <EventsPage />,
			},
			{
				path: "register/success",
				element: <RegisterSuccessPage />,
			},
			{
				path: "paymentSuccess",
				element: <PaymentSuccessPage />,
			},
			{
				path: "paymentCancel",
				element: <PaymentCancelPage />,
			},
		],
	},
	{
		path: "/admin",
		element: <AdminDashboardPage />,
		children: [
			{
				index: true,
				element: <EditableTableEvent />,
			},
			{
				path: "manageEvents",
				element: <EditableTableEvent />,
			},
			{
				path: "manageResourcePersons",
				element: <EditableTableCounseller />,
			},
			{
				path: "manageAppointments",
				element: <EditableTableAppointment />,
			},
			{
				path: "manageBlogs",
				element: <EditableTableBlog />,
			},
			{
				path: "manageJobs",
				element: <EditableTableJobs />,
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
		element: <CounsellerBookingPage />,
	},
	{
		path: "/jobs/desc",
		element: <JobDescriptionPage />,
	},
	{
		path: "/events/desc",
		element: <EventDescriptionPage />,
	},
	{
		path: "/blogs/desc",
		element: <BlogDescriptionPage />,
	},
	{
		path: "/admin/appointment",
		children: [
			{
				path: "create",
				element: <Appointment func={"Create"} />,
			},
			{
				path: "update/:id",
				element: <Appointment func={"Update"} />,
			},
		],
	},
	{
		path: "/admin/event",
		children: [
			{
				path: "create",
				element: <Events func={"Create"} />,
			},
			{
				path: "update/:id",
				element: <Events func={"Update"} />,
			},
		],
	},
	{
		path: "/admin/counseller",
		children: [
			{
				path: "create",
				element: <Counseller func={"Create"} />,
			},
			{
				path: "update/:id",
				element: <Counseller func={"Update"} />,
			},
		],
	},
]);

function App() {
	// const [loggedIn, setLoggedIn] = useState(false);

	// const authenticate = async () => {
	// 	try {
	// 		const token = localStorage.getItem("token");
	// 		console.log(token);
	// 		if (token) {
	// 			setLoggedIn(true);
	// 		} else {
	// 			setLoggedIn(false);
	// 		}
	// 	} catch (err) {
	// 		console.log(err);
	// 		setLoggedIn(false);
	// 	}
	// };

	// useEffect(() => {
	// 	authenticate();
	// }, []);

	// const handleLogout = () => {
	// 	localStorage.removeItem("token");
	// 	setLoggedIn(false);
	// };

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
