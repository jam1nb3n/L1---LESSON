const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.post("/form", (req, res) => {
	const readData = fs.readFileSync("data.json");
	let dataObject = JSON.parse(readData);
	const inputData = {
		username: req.body.username,
		time: Date.now(),
	};
	dataObject["DATA"].push(inputData);
	const writeData = JSON.stringify(dataObject);
	fs.writeFileSync("data.json", writeData);
	console.log(req);
	res.send("Complete");
});

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});
