const prompt = require("prompt-sync")();
let number_to_guess = Math.floor(Math.random() * 100) + 1;
console.log(number_to_guess);

let guesses = 0;
let user_guess;

do {

    guesses++;
  score = 100 - guesses;

  user_guess = parseInt(prompt("Enter Your Guess: "));
  
  if (user_guess > number_to_guess) {
    console.log("Your Guess is Greater than Actual Number");
  } else if (user_guess < number_to_guess) {
    console.log("Your Guess in Less than Actual Number");
  } else {
    console.log("Congratulations You have Guess the Correct Number");
    console.log("You Score is ", score);
  }

} while (user_guess != number_to_guess);
