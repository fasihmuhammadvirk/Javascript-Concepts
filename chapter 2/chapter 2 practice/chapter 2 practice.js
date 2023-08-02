// Question 1 in the notes

const prompt = require("prompt-sync")();

let age = prompt("Enter Your Age: ");
if (age >= 10 && age <= 20) {
  console.log("Your Age is Between 10 and 20");
} else {
  console.log("Your Age is Not Between 10 and 20");
}

// Question 2 in the notes

const day = new Date().getDay();

switch (day) {
  case 0:
    console.log("Sunday");
    break;

  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;
}

// Question 3 in the notes

let num = prompt("Enter a Number: ")
num = Number.parseInt(num)
if (num%2 ==0 && num%3 == 0){
    console.log(num + " Is Divisible by both 2 and 3");
}
else{
    console.log(num + " Is not Divisible by both 2 and 3");
}

// Question 4 in the notes
// it is the same as the above 

// Question 5 in the notes
let result =  age >18? "You can Drive": "You can not Drive"
console.log(result)

