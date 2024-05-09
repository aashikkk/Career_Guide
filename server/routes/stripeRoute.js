const express = require("express");
const router = express.Router();
const stripeController = require("../controllers/stripeController");

router.get("/create-payment-intent", stripeController);

module.exports = router;
