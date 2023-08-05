// ** Promises in JS ** //

console.log("Hello")

setTimeout(function(){
    console.log('Hello in two Second')
    }, 200);
console.log("Hello One")

// promise mean that the promise of the code execution.
const promise = new Promise(function(resolve, reject) {
    console.log("Hello Two")
    resolve(56)
})

console.log(promise)

/* 
if we want to do all these task spontaneously then we 
promise as we don't want that we will wait for the first task
to end so we can goto nex task.
*/    

// Fetch google.com homepage.
// Fetch data from the dataset.
// Fetch Picture from the server.
// Print Downloading. 
// Rest of the script.

