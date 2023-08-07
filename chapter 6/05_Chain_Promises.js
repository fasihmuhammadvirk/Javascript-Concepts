// // Chaining the Promise using .then

// let p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log("Resolve After 2 Second");
// 		resolve(56);
// 	}, 2000);
// });

// // the below help in solving the callback hell problem.

p1.then((value) => {
	console.log(value);
	let p2 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Promise 2");
		}, 2000);
	});

	// can also return the promise like this.
	// return new Promise((resolve,reject)=>{
	//     setTimeout(()=>{resolve('Promise 2')},2000)
	// })

	return p2;
})
	.then((value) => {
		console.log("We are done");
		return 2;
	})
	.then((value) => {
		console.log("Now we are pakka wala done.");
	});

// creating the load script function with the promises.

const loadScript = (src) => {
	return new Promise((resolve,reject) => {
		let script = document.createElement("script");
		script.type = "text/javascript";
		script.src = src;
		document.body.appendChild(script);
		script.onload = () => {
			resolve(1);
		};

		script.onerror = () => {
			reject(0);
		};
	});
};

let p3 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")
p3.then((value)=>{
    console.log("Script has been loaded sir.")
}).catch((error)=>{
    console.log("We are sorry we are having problem loading the script.")
})