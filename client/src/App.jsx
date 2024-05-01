import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ContactUsPage from "./pages/ContactUsPage";
import BlogsPage from "./pages/BlogsPage";
import JobsPage from "./pages/JobsPage";
import EventCalenderPage from "./pages/EventCalenderPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/login" exact element={<LoginPage />} />
                <Route path="/register" exact element={<RegisterPage />} />
                <Route path="/contactUs" exact element={<ContactUsPage />} />
                <Route path="/blogs" exact element={<BlogsPage />} />
                <Route path="/jobs" exact element={<JobsPage />} />
                <Route path="/events" exact element={<EventCalenderPage />} />
                <Route path="/notFound" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
