/*
run the command to install the package to run the prompt.
npm install prompt-sync
*/

// add this line to define the prompt.
// as the is a browser function so we need to import it first
const prompt = require("prompt-sync")({ sigint: true });

// how to take the input
let a = prompt("What's your Age?: ");
console.log(typeof a);

a = Number.parseInt(a); // Converting a String into a Number
console.log(typeof a);

// if else statement

if (a > 0) {
  // this is for browser, it will show a pop up message
  // alert("This is a valid age")
  console.log("This is a valid age");
} 
else {
  console.log("This is an invalid age");
}

// if, else if, else statement

if (a<0){
    console.log("This is an invalid age")
} 
else if (a<9){
    console.log("You are a kid and you cannot even think if driving")
}
else if (a<18 && a >9){
    console.log("You are a kid you can drive after 18")
}
else {
    console.log("You can drive as you are above 18")
}

// switch statement
// The getDay() method returns the weekday as a number between 0 and 6.
// (Sunday=0, Monday=1, Tuesday=2 ..)

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

console.log(day)

// another example

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;// if we donot use the break statment it will also execute the rest of the code below it
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


// Ternary operator
// condition ? exp1 : exp2
console.log("You can", (a < 18? "Not Drive": "Drive"))