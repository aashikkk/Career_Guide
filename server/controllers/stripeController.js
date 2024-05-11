const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function stripeController(req, res) {
	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			mode: "payment",
			// line_items: req.body.items.map((item) => {
			// 	return {
			// 		price_data: {
			// 			currency: "lkr",
			// 			product_data: {
			// 				name: item.name,
			// 			},
			// 			unit_amount: item.price * 100,
			// 		},
			// 		quantity: item.quantity,
			// 	};
			// }),
			success_url: "http://127.0.0.1:5173/paymentSuccess",
			cancel_url: "http://127.0.0.1:5173/paymentCancel",
		});

		res.json({ url: session.url });
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
	// try {
	// 	const paymentIntent = await stripe.paymentIntents.create({
	// 		amount: req.body.amount,
	// 		currency: "lkr",
	// 	});
	// 	res.json({ clientSecret: paymentIntent.client_secret });
	// } catch (error) {
	// 	res.status(500).json({ error: error.message });
	// }
}

module.exports = stripeController;
