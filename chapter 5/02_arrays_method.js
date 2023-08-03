// ** Array Methods ** //

// created an num array.
let an_array = [1, 2, 3, 4, 5, 6];
console.log(an_array, typeof an_array[0]); // expected output : [ 1, 2, 3, 4, 5, 6 ] number.

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

// ** Some More Mehtods ** //



let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num.length)
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
// num1.sort() // sort the item alphabatically // change the original array.

// to sort ascendingly sort take an compare function 
let compare = (a, b) => {
  return b - a;
};
num1.sort(compare);
num1.reverse();
console.log(num1);

// Splice and Slice
let num2 = [551, 22, 3, 14, 5, 6, 7, 8, 229];
let deletedValues = num2.splice(2, 4, 1021, 1022, 1023, 1024, 1025);
console.log(num2);
console.log(deletedValues);

let newNum = num2.slice(3);
console.log(newNum);
let newNum2 = num2.slice(3, 5);
console.log(newNum1);
