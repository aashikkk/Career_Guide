import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../components/PaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// console.log(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function StripePaymentPage() {
	const options = {
		// passing the client secret obtained from the server
		clientSecret: "{{CLIENT_SECRET}}",
	};
	return (
		<div>
			<Elements
				stripe={stripePromise}
				options={options}>
				<PaymentForm />
			</Elements>
		</div>
	);
}

export default StripePaymentPage;
