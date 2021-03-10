var1 = "xye";
var var2 = "jdfal";

let var3 = 12;
const var4 = 18;

const string = "Hello World!";
const number = 128.9;
const boolean = true;

const arr1 = [1, 2, 4];
const obj = {
	firstName: "Ben",
	lastName: "Newman",
	printName: function () {
		console.log(this.firstName + " " + this.lastName);
	},
};

console.log(obj.firstName);
console.log(obj["lastName"]);

const ifTrue = null;

if (ifTrue === true) {
	console.log("I'm true");
} else if (ifTrue === false) {
	console.log("I'm false");
} else {
	console.log("I'm null");
}

const x = "hi";

if (typeof x !== "number") {
	console.log("not number");
} else if (x < 10) {
	console.log("small");
} else console.log("large");

const myFunction = (t) => {
	console.log(t * 10);
};

// function multiply(x, next) {
// 	const res = x * 10;
// 	next(res);
// }

// multiply(5, myFunction);

const res = 5 * 10;
myFunction(res);
