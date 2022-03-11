const { MongoClient } = require("mongodb");

var express = require("express");

var router = express.Router();

const client = new MongoClient(mongoUri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

router.post("/authenticate", (req, res, next) => {
	//use jwt - jsonwebtoken package to create unique token for indivdual user
	if (req.body.email && req.body.password) {
		res.status(200).send({
			result: true,
			token: "ye7hh-2832ey2-2e7237ey27e-2727272-377whd7whwed",
		});
	} else {
		res.status(401).send({ result: false, error: "invalid credentials" });
	}
});

router.post("/register", (req, res, next) => {
	//todo do a server level sanitzation and validation here
	//todo code to save to mongodb
	console.log(req.body);
	const fullName = req.body.fullName;
	const dob = req.body.dob;
	const email = req.body.email;
	const mobileNo = req.body.mobileNo;
	const isSalaried = req.body.isSalaried;

	console.log(fullName, dob, email, mobileNo, isSalaried);
	//req.body.someprop ? res.status(200).send(true) : res.status(401).send(false);
	req.body.email
		? res.status(200).send({ status: true, result: "success" })
		: res.status(200).send({
				status: false,
				result: "error in saving the data. somprops is misisng",
		  });
});

module.exports = router;
