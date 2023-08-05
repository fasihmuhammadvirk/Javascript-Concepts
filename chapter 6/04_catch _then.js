// syntax of the promise

// when the primine is fulfilled
let pf = new Promise((resolve, reject) => {
	console.log("Promise Pending");
	setTimeout(() => {
		console.log("I am a promise and I am fulfilled");
		resolve(true);
        
	}, 5000);
});
console.log(pf)

// if the promise is reject or not fulfilled.
let pr = new Promise((resolve, reject) => {
	console.log("Promise Pending");
	setTimeout(() => {
		console.log("I am a promise and I am rejected");
		// resolve(true);
        reject(new Error("I am an Error"))
	}, 5000);
});

console.log(pr)
// pending

