// syntax of the promise

// when the primine is fulfilled
let pf = new Promise((resolve, reject) => {
	console.log("Promise Pending");
	setTimeout(() => {
		// console.log("I am a promise and I am fulfilled");
		resolve(true);
        
	}, 5000);
});


// if the promise is reject or not fulfilled.
let pr = new Promise((resolve, reject) => {
	console.log("Promise Pending");
	setTimeout(() => {
		// console.log("I am a promise and I am rejected");
		// resolve(true);
        reject(new Error("I am an Error"))
	}, 5000);
});

// To get the value.
pf.then((value)=> {
	console.log(`The value of the pf is ${value}`)
})

// To catch the error.
pr.catch((error)=>{
	console.log("Some Error Occur in pr")
})

//if we donot want to use the catch.
pr.then((value)=> {
	console.log(value)
},(error)=>{
	console.log(error)
})

// practice 
let promise = new Promise(resolve => {
	setTimeout(()=> resolve ("done"),1000);
})

promise.then(alert)