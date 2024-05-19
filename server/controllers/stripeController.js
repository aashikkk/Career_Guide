const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function stripeController(req, res) {
	const product = await stripe.products.create({
		name: "Counselling for Career",
	});

	if (product) {
		var price = await stripe.prices.create({
			product: `${product.id}`,
			unit_amount: 2000 * 100,
			currency: "lkr",
		});
	}

	if (price.id) {
		var session = await stripe.checkout.sessions.create({
			line_items: [{ price: `${price.id}`, quantity: 1 }],
			payment_method_types: ["card"],
			mode: "payment",
			success_url: "http://localhost:5173/paymentSuccess",
			cancel_url: "http://localhost:5173/paymentCancel",
		});
	}

	// const session = await stripe.checkout.sessions.create({
	// 	payment_method_types: ["card"],
	// 	mode: "payment",
	// 	line_items: [
	// 		{
	// 			price: 2000,
	// 			quantity: 1,
	// 		},
	// 	],
	// 	success_url: "http://127.0.0.1:5173/paymentSuccess",
	// 	cancel_url: "http://127.0.0.1:5173/paymentCancel",
	// });

	res.json(session);

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
