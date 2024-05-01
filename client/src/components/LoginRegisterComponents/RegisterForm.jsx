import React from "react";
import { Input, Ripple, initTWE } from "tw-elements";
initTWE({ Input, Ripple });

import InputText from "./InputText";
import RememberMeCheckBox from "./RememberMeCheckBox";
import Button from "./Button";

function RegisterForm() {
    return (
        <section className="h-4/5">
            <div className="container h-full px-6 py-24">
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
                        <form>
                            <InputText
                                type={"text"}
                                placeholder={"Email Address"}
                                id={"EmailInputController44"}
                                htmlFor={"EmailInputController4"}
                                labelName={"Email Address"}
                            />

                            <InputText
                                type={"text"}
                                placeholder={"Full Name"}
                                labelName={"Full Name"}
                            />

                            <InputText
                                type={"text"}
                                placeholder={"NIC"}
                                labelName={"NIC"}
                            />

                            <InputText
                                type={"text"}
                                placeholder={"Phone Number"}
                                labelName={"Phone Number"}
                            />

                            <InputText
                                type={"password"}
                                placeholder={"Password"}
                                labelName={"Password"}
                            />

                            <RememberMeCheckBox />

                            {/* <!-- Register button --> */}
                            <Button type={"button"} BtnName={"Register"} />

                            <div className="text-center lg:text-left">
                                {/* <!-- Register link --> */}
                                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                    Have an account? &nbsp;
                                    <a
                                        href="#!"
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
