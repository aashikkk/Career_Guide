import { useEffect, useState } from "react";
import { Input, Ripple, initTWE } from "tw-elements";
import axios from "../../axios";
import InputText from "./InputText";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Label, Select } from "flowbite-react";

function RegisterForm() {
	useEffect(() => {
		initTWE({ Input, Ripple });
	}, []);

	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [nic, setNic] = useState("");
	const [password, setPassword] = useState("");
	const [category, setCategory] = useState("");
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const errors = {};
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const phoneRegex = /^\d{10}$/;
		const nicRegex = /^\d{9}[vVxX]$/;

		if (!name) {
			errors.name = "Name is required";
		}
		if (!username) {
			errors.username = "Username is required";
		}
		if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
			errors.phoneNumber = "Invalid phone number";
		}
		if (!email || !emailRegex.test(email)) {
			errors.email = "Invalid email address";
		}
		if (!nic || !nicRegex.test(nic)) {
			errors.nic = "Invalid NIC";
		}
		if (!password) {
			errors.password = "Password is required";
		} else if (password.length < 8) {
			errors.password = "Password must be at least 8 characters long";
		}
		if (!category) {
			errors.category = "Category is required";
		}
		setErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		try {
			const response = await axios.post("/api/register", {
				name,
				username,
				phoneNumber,
				email,
				nic,
				password,
				category,
			});

			console.log(response.data);
			navigate("/register/success");
		} catch (error) {
			console.error(error.response.data);
			// Handle error
		}
	};

	return (
		<section className="h-4/5">
			<h2 className="mb-4 pt-8 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
				Register your account
			</h2>
			<div className="container h-full px-6 pb-24 pt-12">
				<div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
					<div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
						<img
							src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
							className="w-full"
							alt="Sample image"
						/>
					</div>
					<div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
						<form onSubmit={handleSubmit}>
							<InputText
								type={"text"}
								placeholder={"Email Address"}
								labelName={"Email Address"}
								value={email}
								onChange={(value) => setEmail(value)}
								error={errors.email}
							/>
							<InputText
								type={"text"}
								placeholder={"Full Name"}
								labelName={"Full Name"}
								value={name}
								onChange={(value) => setName(value)}
								error={errors.name}
							/>
							<InputText
								type={"text"}
								placeholder={"Username"}
								labelName={"Username"}
								value={username}
								onChange={(value) => setUsername(value)}
								error={errors.username}
							/>
							<InputText
								type={"text"}
								placeholder={"NIC"}
								labelName={"NIC"}
								value={nic}
								onChange={(value) => setNic(value)}
								error={errors.nic}
							/>
							<InputText
								type={"text"}
								placeholder={"Phone Number"}
								labelName={"Phone Number"}
								value={phoneNumber}
								onChange={(value) => setPhoneNumber(value)}
								error={errors.phoneNumber}
							/>
							<InputText
								type={"password"}
								placeholder={"Password"}
								labelName={"Password"}
								value={password}
								onChange={(value) => setPassword(value)}
								error={errors.password}
							/>
							<div className="relative mb-6">
								<div className="mb-2">
									<Label
										htmlFor="users"
										value="Choose a Category"
									/>
								</div>

								<Select
									value={category}
									onChange={(e) => setCategory(e.target.value)}
									name="userType">
									<option value="">Select Category</option>
									<option value="SchoolStudent">School Student</option>
									<option value="Undergraduate">Undergraduate</option>
									<option value="Graduate">Graduate</option>
								</Select>
								{errors.category && (
									<p className="text-red-500 mt-1">{errors.category}</p>
								)}
							</div>

							<Button
								type={"submit"}
								BtnName={"Register"}
							/>
							<div className="text-center lg:text-left">
								<p className="mb-0 mt-2 pt-1 text-sm font-semibold">
									Have an account? &nbsp;
									<a
										href="/login"
										className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
										Login
									</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default RegisterForm;

{
	/* <div className="relative mb-6">
	<label
		htmlFor="users"
		className="block mb-2 text-m font-medium">
		Choose a Category:
	</label>
	<select
		value={category}
		onChange={(e) => setCategory(e.target.value)}
		name="userType"
		className="rounded peer block min-h-[auto] w-full border bg-gray-50 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0">
		<option value="">Select Category</option>
		<option value="SchoolStudent">School Student</option>
		<option value="Undergraduate">Undergraduate</option>
		<option value="Graduate">Graduate</option>
	</select>
	{errors.category && <p className="text-red-500 mt-1">{errors.category}</p>}
</div>; */
}
