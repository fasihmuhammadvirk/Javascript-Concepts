// Scope Variable Example

// globally scoped
let a = 10;
const b = 9;

// var is a variable that is globally scoped
var c = 8;

// block of code
{
	let a = 12; // locally scoped inside the block
	const b = 13;

	// if we changed tha value of c it will be changed globally
	var c = 14;
	console.log(a, b, c); // 12 13 14
}

console.log(a, b, c); // 10 9  14

// Hoisting Example

var an_var;
console.log(an_var);
an_var = 100; // will get undefined cause the value is not defined but the variable is declared.

console.log(another_var);
var another_var = 110; // same as above.

let a_let_var;
console.log(a_let_var);
a_let_var = 100; // undefined

// // expected and error so
// console.log(another_let_var)
// another_let_var = 'some value' // here we will get a ReferenceError unlike var

// Loops on Array

let an_array = [2, 3, 41, 435, 75, 3, 9, 0, 1];

console.log("forEach Loop");
//square of the element in the array
an_array.forEach((element) => {
	// return value
	console.log(element * element);
});

console.log("forOf Loop"); // return value
for (let item of an_array) {
	console.log(item);
}

console.log("forin Loop"); // return index
for (let item in an_array) {
	console.log(item);
}

// finding the second largest value in the array

const compare = (a, b) => {
	return a - b;
};

second_larget_element_in_arr = an_array.sort(compare).reverse()[1];
console.log(second_larget_element_in_arr);

// ** Array Methods ** //

// coverting the element of each array into string.
let array_into_string = an_array.toString();
console.log(array_into_string, typeof array_into_string[0]); // expected output : 1,2,3,4,5,6 string.

// joining the element of the array and converting it into a string.
// instead of underscore we can give any string e.g " and ".
let join_array = an_array.join("_");
console.log(join_array, typeof join_array); // expected output : 1_2_3_4_5_6 string.

// to extract the element from the array or to pop the element.
// it will pop the last element from the array, and also return it.
let pop_element = an_array.pop();
console.log(an_array, pop_element); // expected output : [ 1, 2, 3, 4, 5 ].

// to add an element in the end of the array.
// it push the new element at the end of the array and return the new length of the array.
let return_new_length = an_array.push(7);
console.log(an_array, return_new_length); // expected output : [ 1, 2, 3, 4, 5, 7 ] 6 // 6 i the new length of array.

// to remove an element at the start of the array.
// remove the first element and return it.
let remove_start = an_array.shift();
console.log(an_array, remove_start); // expected output : [ 1, 2, 3, 4, 5, 7 ] 6

// to add an element in the start of the array.
// adding the element in the start of the array and unshift return the new length of the array.
let return_from_unshift = an_array.unshift(10);
console.log(an_array, return_from_unshift); // expected output : 10, 2, 3, 4, 5, 7 ] 6

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num.length);
// delete the element in the array and also does not change the length of the array
delete num[0];
console.log(num.length);

// concat two or more array into a new one
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419];
let newArray = num.concat(num_more, num_even_more);
console.log(newArray);
console.log(num, num_more);

// sort method
let num1 = [551, 22, 3, 14, 5, 6, 7, 8, 229];

// Splice and Slice
let num2 = [551, 22, 3, 14, 5, 6, 7, 8, 229];
let deletedValues = num2.splice(2, 4, 1021, 1022, 1023, 1024, 1025);
console.log(num2);
console.log(deletedValues);

let newNum = num2.slice(3);
console.log(newNum);
let newNum2 = num2.slice(3, 5);
console.log(newNum2);

// ** Object Methods ** //

const an_obj = {
	firstname: " faish muhammad",
	lastname: " virk",
	greet: function greet() {
		return "Hello";
	},

	greetwithname: function greetname() {
		return this.greet() + this.firstname + this.lastname;
	},
};

console.log("The object is", an_obj.greetwithname());

const testScore = {
  damon: 89,
  shawn: 91,
  keenan: 80,
  kim: 89,
};

Object.keys(testScore);  // gives all keys
Object.values(testScore); // gives all values
Object.entries(testScore); // gives nested arrays of key-value pairs