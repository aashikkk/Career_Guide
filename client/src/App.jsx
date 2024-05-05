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
import ContactForm from "./components/ContactPageComponents/ContactForm";

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
                path: "register",
                element: <RegisterPage />,
            },
            {
                path: "/contactUs",
                element: <ContactUsPage />,
            },
            {
                path: "/blogs",
                element: <BlogsPage />,
            },
            {
                path: "/jobs",
                element: <JobsPage />,
            },
            {
                path: "/events",
                element: <EventCalenderPage />,
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminDashboardPage />,
        children: [
            {
                index: true,
                element: <ContactForm />,
            },
            {
                path: "manageEvents",
                element: <ContactForm />,
            },
            {
                path: "manageResourcePersons",
                element: <ContactForm />,
            },
        ],
    },
]);

function App() {
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
