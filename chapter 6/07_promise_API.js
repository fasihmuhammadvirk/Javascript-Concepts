// Promise API is the method of promises.

let p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Value1");
	}, 1000);
});

// this contain error
let p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
        reject(new Error("Error"))
	}, 2000);
});
let p3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Value3");
	}, 3000);
});
let p4 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Value4");
	}, 11000);
});

// p1.then ((value)=>{
//     console.log (value)
// })
// p2.then ((value)=>{
//     console.log (value)
// })
// p3.then ((value)=>{
//     console.log (value)
// })

// if we want to get all the value of promises at once after they
// are resolved below if the example of such case.

// * Methods of Promises * //

console.log("Promise Methods")

// if we want to get all value if there is not error.
// if we face or catch an error this will not give use any values
// let promis_all_values = Promise.all([p1,p3,p4])
// promis_all_values.then((value)=>{
//     console.log(value)
// })

// // if we want to handle the error and also the value.
// // it will give use all the value their status and reason.
// let promise_all = Promise.allSettled([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// }) 

// //it will give us the value that is resolved first
// // if the promie cath error it will give us the error
// let promise_get_first = Promise.race([p1,p3,p4])
// promise_get_first.then((value)=>{
//     console.log('This is Resolved First',`"${value}"`)
// })



// // it will wait for the first resolved promise and give us the value
// // it will not return the error promise if it catch any
// let promise_get_any = Promise.any([p1,p2,p3,p4])
// promise_get_any.then((value)=>{
//     console.log(value)
// })


// give us a resolved value 
promise_resolved = Promise.resolve(6)
console.log(promise_resolved)
// give us a rejected value 
promise_reject = Promise.reject(new Error("Hey"))
console.log(promise_reject)


