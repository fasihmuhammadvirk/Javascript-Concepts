// ** Arithmetic Operators in Java Script ** //
console.log("Arithmetic Operators in JS.")

let a = 45;
let b = 4;

console.log("a + b = ", a + b); // Addition Operator
console.log("a - b = ", a - b); // Subtraction Operator
console.log("a / b = ", a / b); // Division Operator 
console.log("a * b = ", a * b); // Multiplication Operator
console.log("a % b = ", a % b); // Modulus  Operator // Reminder
console.log("a ** b = ", a ** b); // Exponentiation Operator // 45*45*45*45

console.log('Value of a Right Now = ', a)
console.log("Pre Increment ++ a = ", ++ a) // Pre Increment Operator
console.log("After Increment", a)

console.log('Value of a Right Now = ', a)
console.log("a ++ = ", a ++) // Post Increment Operator
console.log("After Increment", a)

console.log('Value of a Right Now = ', a)
console.log("-- a = ", -- a) // Pre Decrement Operator
console.log("After Increment", a)

console.log('Value of a Right Now = ', a)
console.log("a -- = ", a --) // Post Decrement Operator
console.log("After Increment", a)


// Guess the out put of the program
console.log("++ a = ", ++ a) 
console.log("a ++ = ", a ++) 
console.log("-- a = ", -- a) 
console.log("a -- = ", a --)
console.log("a = ", a) 
console.log("a -- = ", a --) 

// ** Assignment Operators in Java Script ** //
console.log("Assignment Operators in JS")

// a is declare above in the code.
assignment = 1 // simple assignment operator.

assignment += 5 // same as a = a + 5 
console.log(assignment) // will print the value 6. 

assignment -= 2 // same as a = a + 1 
console.log(assignment) // will print the value 4. 

assignment /= 2 // same as a = a + 1 
console.log(assignment) // will print the value 2. 

assignment *= 2 // same as a = a + 5 
console.log(assignment) // will print the value 4. 

assignment **= 2 // same as a = a + 5 
console.log(assignment) // will print the value 16. 

assignment %= 2 // same as a = a + 5 
console.log(assignment) // will print the value 0. 

// ** Comparison Operators in Java Script ** //
console.log("Comparison Operators in JS")


//* Info *// we use comparison operator where we want to compare two values and as a result we have to return the value true or false.

let comp1 = 6;
let comp2 = 7;
let comp3 = "6";
let comp4 = 6;

//* Info *// check if both operands has same value or not.
console.log("comp1 == comp2 : ", comp1 == comp2) // equal to //will return false as both value are not same
//* Info *//  check if both operands has not same value.
console.log("comp1 != comp2 : ", comp1 != comp2) //not euqal to // will return true as both value are not same


console.log("comp1 == comp3 : ", comp1 == comp3) // equal to //will return true as both value are same
console.log("comp1 != comp3 : ", comp1 != comp3) // not equal to //will return false as both value are not same


//* Info *//  check if both the value and datatype of the operand is same 
console.log("comp1 === comp4: ",comp1 === comp4) // will return true 
//* Info *//  check if both the value and datatype of the operand are not sam
console.log("comp1 !== comp4: ",comp1 !== comp4) // will return false

//* Info *//  will return true if both value and datatype are same
console.log("comp1 === comp3: ", comp1 === comp3) // will return false as the value is same but not the datatype
//* Info *//  it will be true if both value and dataype are different
console.log("comp1 !== comp3: ", comp1 === comp3) // will return false also as the value is same but not dattype


// ** Logical Operators in Java Script ** //
console.log("Logical Operators in JS")

const x = 5
const y = 6

// And Opertor
console.log(x < y && x == 5) // will return true as (True and True == True).
console.log(x > y && x == 5) // will return false as one is false.

// Or operator
console.log(x < y || x == 5) // both true return true.
console.log(x > y || x == 5) // one is false still return true.

// Not Operator
console.log(!true);   // returns False
