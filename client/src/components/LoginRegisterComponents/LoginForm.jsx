import React from "react";
import { Input, Ripple, initTWE } from "tw-elements";
import RememberMeCheckBox from "./RememberMeCheckBox";
import Button from "./Button";
import InputText from "./InputText";

function LoginForm() {
    initTWE({ Input, Ripple });

    return (
        <section className="h-4/5">
            <h2 className="mb-4 pt-8 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                Login to your account
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
                        <form>
                            <InputText
                                type={"text"}
                                placeholder={"Email Address"}
                                id={"EmailInputController33"}
                                htmlFor={"EmailInputController3"}
                                labelName={"Email Address"}
                            />

                            <InputText
                                type={"password"}
                                placeholder={"Password"}
                                // id={"PwdInputController33"}
                                // htmlFor={"PwdInputController3"}
                                labelName={"Password"}
                            />

                            <RememberMeCheckBox showForgotPwd={true} />

                            {/* <!-- Submit button --> */}
                            <Button type={"submit"} BtnName={"Login"} />

                            {/* <!-- Register link -->Name */}
                            <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                Don&apos;t have an account? &nbsp;
                                <a
                                    href="/register"
                                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                >
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
