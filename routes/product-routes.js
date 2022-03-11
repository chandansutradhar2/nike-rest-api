const { MongoClient } = require("mongodb");

var express = require("express");

var router = express.Router();

const authenticateToken = (req, res, next) => {
	const token = req.headers.token;
	if (token) {
		next();
	} else {
		res.sendStatus(401);
	}
};

router.get("/getAllProduct", authenticateToken, (req, res, next) => {
	let products = [
		{ id: "ni9662", name: "Totally New product ", price: 35000, qty: 121 },
		{ id: "ni3899", name: "NIke Air Sneaker", price: 65000, qty: 10 },
		{ id: "ni0383", name: "Nike Runner", price: 60000, qty: 150 },
		{ id: "ni9323", name: "Air floater", price: 35000, qty: 121 },
		{ id: "ni382199", name: "NIke Air Sneaker Advance", price: 65000, qty: 10 },
		{ id: "ni03233", name: "Nike Runner Nightly", price: 60000, qty: 150 },
		{ id: "ni93282", name: "Air floater Air ", price: 35000, qty: 121 },
	];
	res.status(200).send(products);
});

module.exports = router;
