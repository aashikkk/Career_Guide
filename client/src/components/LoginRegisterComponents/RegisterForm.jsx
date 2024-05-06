import React, {useEffect, useState} from "react";
import { Input, Ripple, initTWE } from "tw-elements";
import axios from "axios"

import InputText from "./InputText";
import RememberMeCheckBox from "./RememberMeCheckBox";
import Button from "./Button";

function RegisterForm() {
    useEffect(()=>{
        initTWE({ Input, Ripple });
    },[])

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [nic, setNic] = useState('');
    const [password, setPassword] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/register', {
                name,
                username,
                phoneNumber,
                email,
                nic,
                password,
                category
            });
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
        }
    };


    return (
        <section className="h-4/5">
            <h2 className="mb-4 pt-8 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                Register your account
            </h2>
            <div className="container h-full px-6 pb-24 pt-12">
                {/* <!-- Left column container with background--> */}
                <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Sample image"
                        />
                    </div>

                    {/* <!-- Right column container --> */}
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">

                        <form onSubmit={handleSubmit}>
                            <InputText
                                type={"text"}
                                placeholder={"Email Address"}
                                labelName={"Email Address"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <InputText
                                type={"text"}
                                placeholder={"Full Name"}
                                labelName={"Full Name"}
                                value={name}
                                onChange={(e) => setName(e.target.value)}

                            />
                            <InputText
                                type={"text"}
                                placeholder={"Username"}
                                labelName={"Username"}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <InputText
                                type={"text"}
                                placeholder={"NIC"}
                                labelName={"NIC"}
                                value={nic}
                                onChange={(e) => setNic(e.target.value)}
                            />

                            <InputText
                                type={"text"}
                                placeholder={"Phone Number"}
                                labelName={"Phone Number"}
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />

                            <InputText
                                type={"password"}
                                placeholder={"Password"}
                                labelName={"Password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <div className="relative mb-6">
                                <label htmlFor="users" className="block mb-2 text-m font-medium">Choose a Category:</label>
                                <select value={category} onChange={(e) => setCategory(e.target.value)} name="userType"  className="rounded peer block min-h-[auto] w-full border bg-gray-50 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0" >
                                    <option value="SchoolStudent">School Student</option>
                                    <option value="Undergraduate">Undergraduate</option>
                                    <option value="Graduate">Graduate</option>
                                </select>
                            </div>


                            <RememberMeCheckBox />

                            {/* <!-- Register button --> */}
                            <Button type={"submit"} BtnName={"Register"} />

                            <div className="text-center lg:text-left">
                                {/* <!-- Register link --> */}
                                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                    Have an account? &nbsp;
                                    <a
                                        href="/login"
                                        className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                    >
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
