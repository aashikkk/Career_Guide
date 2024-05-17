import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { Input, Ripple, initTWE } from "tw-elements";
import RememberMeCheckBox from "./RememberMeCheckBox";
import Button from "./Button";
import InputText from "./InputText";
import { AuthContext } from "../../auth/AuthContext";

function LoginForm() {
	initTWE({ Input, Ripple });
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const { login } = useContext(AuthContext);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();
		axios.defaults.withCredentials = true;

		try {
			const response = await axios.post("/login", { username, password });
			const { category, token, name } = response.data; // Assuming the response contains the user category
			console.log(response.data);
			// console.log("Login Token is: " + token);
			localStorage.setItem("token", token);

			// Construct userData
			const userData = {
				isAuthenticated: true,
				role: category,
				token: token,
				name: name,
			};

			setError("");
			// Use login function from context
			login(userData);

			// Redirect based on user role
			switch (category) {
				case "SchoolStudent":
				case "Graduate":
				case "Undergraduate":
					navigate("/user");
					break;
				case "Admin":
					navigate("/admin");
					break;
				case "Counseller":
					navigate("/counseller");
					break;
				default:
					// Handle unexpected category
					console.error("Unknown user category:", category);
					setError("Invalid user category. Please contact support.");
					console.log("Category:", category); // Debug: Check the category value
			}
		} catch (error) {
			console.error("Login failed:", error);
			setError("Invalid username or password. Please try again.");
			setTimeout(() => {
				setError("");
			}, 3000);
		}
	};

	return (
		<section className="h-4/5">
			<h2 className="mb-4 pt-8 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
				<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-red-400">
					Login
				</span>{" "}
				to your account
			</h2>
			<div className="container h-full px-6 py-12">
				<div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
					{/* <!-- Left column container with background--> */}

					<div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
						<img
							src="https://img.freepik.com/premium-vector/welcome-back-lettering-door-plaque-welcome-back-hanging-sign-board-concept-welcoming-home_497399-46.jpg"
							className="w-8//12"
							alt="Welcome Back image"
						/>
					</div>

					{/* <!-- Right column container with form --> */}

					<div className="md:w-8/12 lg:ms-6 lg:w-5/12">
						<form onSubmit={handleLogin}>
							<InputText
								type={"text"}
								placeholder={"Username"}
								labelName={"Username"}
								value={username}
								onChange={setUsername}
							/>

							<InputText
								type={"password"}
								placeholder={"Password"}
								labelName={"Password"}
								value={password}
								onChange={setPassword}
							/>

							<RememberMeCheckBox showForgotPwd={true} />
							{error && <p className="text-red-500 mt-2">{error}</p>}
							{/* {error && <RegisterFailed errorMsg={error} />} */}

							{/* <!-- Submit button --> */}
							<Button
								type={"submit"}
								BtnName={"Login"}
							/>

							{/* <!-- Register link -->Name */}
							<p className="mb-0 mt-2 pt-1 text-sm font-semibold">
								Don&apos;t have an account? &nbsp;
								<a
									href="/register"
									className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
									Register
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default LoginForm;
