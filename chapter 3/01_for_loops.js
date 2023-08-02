// *** Loops in Java Script *** //
/*
Type of Loops Available in JS.
For Loop
For in Loop 
For of Loop
While loop
Do-while loop
*/

const prompt = require("prompt-sync")();

// ** For Loop ** //

// will run till from 0 to  n - 1 // n is 34 , so 34 -1 == 33
for (let i = 0; i < 34; i++) {
  console.log(i);
}

// Program to add first n Numbers

let sum = 0;
n = prompt("Enter the value of n: ");
n = Number.parseInt(n);

for (let i = 0; i <= n; i++) {
  sum += i;
}
console.log("Sum of first", n, "Natural Number is", sum);

// ** For in Loop ** //

let obj = {
    fasih: 90,
    masif: 80,
    ali: 79,
    hamza: 65,
    yasmeen: 20,
    khaled: 50,
};

// give the key of the obj
for (a in obj) {
    console.log("Marks of", a, "are", obj[a]);
}

// ** For of Loop ** //

// we use for of loop for array or string.
// it give us the value of the items.
// mostly used on arrays.
// only works on iterable objects.

for (i of "Fasih"){
    console.log(i)// it will print each letter of the string
}
