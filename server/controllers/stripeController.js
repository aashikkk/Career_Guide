const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function stripeController(req, res) {
	// const product = await stripe.products.create({
	// 	name: "Counselling for Career",
	// });

	// if (product) {
	// 	var price = await stripe.prices.create({
	// 		product: `${product.id}`,
	// 		unit_amount: 2000 * 100,
	// 		currency: "lkr",
	// 	});
	// }

	var session = await stripe.checkout.sessions.create({
		line_items: [{ price: "price_1PINZpJffTY8EYLglsUOuYEh", quantity: 1 }],
		custom_fields: [
			{
				key: "username",
				label: {
					custom: "Your Name",
					type: "custom",
				},
				type: "text",
			},
			{
				key: "counsellorname",
				label: {
					custom: "Counsellor Name",
					type: "custom",
				},
				type: "text",
			},
		],
		payment_method_types: ["card"],
		mode: "payment",
		success_url: "http://localhost:5173/paymentSuccess",
		cancel_url: "http://localhost:5173/paymentCancel",
	});

	console.log(session.url);

	res.json(session);
}

module.exports = stripeController;
