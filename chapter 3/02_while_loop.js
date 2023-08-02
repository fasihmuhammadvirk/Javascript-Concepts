const prompt = require("prompt-sync")();

// ** wile loop ** //

n = prompt("Enter the value of n: "); // taking input from user for number of iterations.
let i = 0;
// if condition never became false then the loop will not end and may crash your runtime
while (i < n) {
  // condition
  console.log(i);
  i++;
}

// ** do - wile loop ** //

num = prompt("Enter the value of n: "); // taking input from user for number of iterations.
let j = 0;

// in this loop the block will run first irrespective of the condition
do {
  console.log(j);
  j++;
} while (j < num); // condition

// making condition false
do {
  console.log(j);
  j++;
} while (j > num); // condition
