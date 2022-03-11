const { MongoClient } = require("mongodb");

var express = require("express");

var router = express.Router();

const client = new MongoClient(
	"mongodb+srv://admin:hisyCn$AhkX5Ggz@lab-cluster-1.ihxrn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
);

router.post("/authenticate", (req, res, next) => {
	//use jwt - jsonwebtoken package to create unique token for indivdual user
	if (req.body.Email && req.body.Password) {
		res.status(200).send({
			result: true,
			token: "ye7hh-2832ey2-2e7237ey27e-2727272-377whd7whwed",
		});
		//	res.status(401).send({ result: false, error: "invalid credentials" });
	} else {
		res.status(401).send({ result: false, error: "invalid credentials" });
	}
});

router.post("/signout", (req, res, next) => {
	if (req.body.token) {
		//logout user
		res.status(200).send(true);
	} else {
		res.status(401).send("unauthorized access");
	}
});

router.post("/register", (req, res, next) => {
	//todo do a server level sanitzation and validation here
	//todo code to save to mongodb
	console.log(req.body);
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const password = req.body.password;
	const email = req.body.email;
	const mobileNo = req.body.mobileNo;

	req.body.email
		? res.status(200).send({ status: true, result: "success" })
		: res.status(401).send({
				status: false,
				result: "error in saving the data. some data is misisng",
		  });
});

module.exports = router;
