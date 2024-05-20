import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "../axios";

function StripePaymentPage() {
	const [url, setUrl] = useState(null);

	useEffect(() => {
		async function initializePayment() {
			const stripe = await loadStripe(
				import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
			);

			const body = {
				lineItems: [
					{
						name: "Counselling for Career",
						price: 2000,
						quantity: 1,
					},
				],
			};

			try {
				const response = await axios.post(`/api/pay/create-checkout-session`, {
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(body),
				});

				if (response && response.status === 200) {
					setUrl(response.data.url);
				}
			} catch (error) {
				console.error("Failed to create checkout session:", error);
			}
		}

		initializePayment();
	}, []);

	if (url) {
		window.location.href = url;
		return null;
	}

	return <div></div>;
}

export default StripePaymentPage;
