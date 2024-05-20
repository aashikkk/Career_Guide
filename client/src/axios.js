import axios from "axios";

// export default axios.create({
// 	baseURL: "http://localhost:5000",
// });

axios.create();

axios.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response && error.response.status === 401) {
			// Assuming 401 Unauthorized for token expiration
			// Broadcast an event or call a method to handle logout
			document.dispatchEvent(new CustomEvent("token-expired"));
		}
		return Promise.reject(error);
	}
);

export default axios;
