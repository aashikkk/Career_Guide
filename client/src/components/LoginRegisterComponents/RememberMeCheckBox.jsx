import React from "react";
import { Input, Ripple, initTWE } from "tw-elements";

function RememberMeCheckBox({ showForgotPwd }) {
    initTWE({ Input, Ripple });

    return (
        <div className="mb-6 flex items-center justify-between">
            <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                <input
                    className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                    type="checkbox"
                    value=""
                    id="exampleCheck3"
                />
                <label
                    className="inline-block ps-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck3"
                >
                    Remember me
                </label>
            </div>

            {/* <!-- Forgot password link --> */}

            {showForgotPwd && (
                <a
                    href="#!"
                    className="text-primary focus:outline-none dark:text-primary-400"
                >
                    Forgot password?
                </a>
            )}
        </div>
    );
}

export default RememberMeCheckBox;
