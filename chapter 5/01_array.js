// ** Arrays ** //
// Arrays starts from the zero index, mean from 0 value.
// Arrays are mutable.

let marks_class_12 = [91, 82, 73, 64, 55, 46];
console.log(marks_class_12); // expected output [91,82,73,64,55,46].

// we can also store different datatype values in a array.
let mix_array = [91, null, undefined, "string", true];
console.log(mix_array);

// accessing the value in an array.
console.log(mix_array[0]);
console.log(mix_array[1]);
console.log(mix_array[2]);

// if we try to access a value that is not present in the array it will give us undefined.
console.log(mix_array[6]); // as index 6 does not exist, expected output undefined.

// to check the total number of element in an array
console.log(mix_array.length);

// we can also add element in the array that are not present now
mix_array[6] = "new element";
console.log(mix_array[6]);

// we can even change the existing value of an array.
mix_array[2] = false;
console.log(mix_array[2]);
