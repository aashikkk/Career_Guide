async function stripeController(req, res) {
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: req.body.amount,
			currency: "lkr",
		});
		res.json({ clientSecret: paymentIntent.client_secret });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}

module.exports = stripeController;
