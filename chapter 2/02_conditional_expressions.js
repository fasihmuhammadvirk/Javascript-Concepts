/*
run the command to install the package to run the prompt.
npm install prompt-sync
*/

// add this line to define the prompt. 
// as the is a browser function so we need to import it first
const prompt = require("prompt-sync")({sigint:true});

// how to take the input
let a = prompt("What's your Age?: ");
console.log(typeof a)

a = Number.parseInt(a) // Converting a String into a Number
console.log(typeof a)

// if statement

if (a > 0 ){

    alert("This is a valid age")

}

