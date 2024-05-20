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
			customer_creation: "always",
			line_items: [{ price: `${price.id}`, quantity: 1 }],
			payment_method_types: ["card"],
			mode: "payment",
			success_url: "http://localhost:5173/paymentSuccess",
			cancel_url: "http://localhost:5173/paymentCancel",
		});
	}

	res.json(session);
}

module.exports = stripeController;
