const express = require("express");
const app = express();

const userRoutes = require("./routes/user-routes");

app.use(express.json());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin,X-Requested-With,Content-Type,Accept,token",
	);
	next();
});

app.use("/user", userRoutes);

// app.get("/", (request, response, next) => {
// 	response.status(200).send("Hi there");
// });

app.listen(8000, () => {
	console.log("server started and listening on port 8000");
});
