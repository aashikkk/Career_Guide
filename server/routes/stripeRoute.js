const express = require("express");
const router = express.Router();
const stripeController = require("../controllers/stripeController");

router.get("/create-checkout-session", stripeController);

module.exports = router;
