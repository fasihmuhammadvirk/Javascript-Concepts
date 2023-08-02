const prompt = require("prompt-sync")();
// Question 1 in the notes.
console.log("Question 1");
let marks = {
  fasih: 97,
  masif: 99,
  ali: 50,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks's of",
    Object.keys(marks)[i],
    "are",
    marks[Object.keys(marks)[i]]
  );
}

// Question 2 in the notes.
console.log("Question 2");

for (k in marks) {
  console.log("The marks of", k, "are", marks[k]);
}

// Question 3 in the notes.
console.log("Question 3");
let number_to_guess = 10;
let n;


while (n != number_to_guess)
{
    n = prompt("Enter the Number: ")
    console.log("Try Again")
}
console.log("Congratulations you have guess te number")

//another approach
while(true){
  num = prompt("Enter the Number: ");
  if (num == number_to_guess) {
    console.log("Congratulations you guess the number right.")
    break;
  } else {
    console.log("Try Again");
  }
}

// Question 4 in the notes.

const num_mean = (num1,num2,num3,num4,num5) =>{
    return (num1+num2+num3+num4+num5)/5
}

console.log(`Mean is ${num_mean(1,2,3,4,5)}`)

