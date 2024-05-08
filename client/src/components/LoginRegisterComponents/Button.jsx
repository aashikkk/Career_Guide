import React from "react";

function Button({ type, BtnName }) {
    return (
        //    <!-- Submit button -->

        <button
            type={type}
            className="inline-block w-full rounded-lg bg-primary-700 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-800  focus:ring-4 focus:outline-none focus:ring-primary-300 active:bg-primary-600 active:shadow-primary-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            
        >
            {BtnName}
        </button>
    );
}

export default Button;
