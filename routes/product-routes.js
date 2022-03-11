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
		{ name: "IPhone X", price: 65000, qty: 10 },
		{ name: "Samsung Fold", price: 60000, qty: 150 },
		{ name: "RealMe Nord", price: 35000, qty: 121 },
	];
	res.status(200).send(products);
});

module.exports = router;
