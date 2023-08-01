// nn bb ss u -way to remember the 7 primitive data type in JS.

// ** Primitive DataType in Java Script. ** // 

console.log("Working with Primitive Data Type is JS.")

let a = null;                       // Null 
let b = 123;                        // Number
let c = true;// can also be false   // Boolean
let d = BigInt("3456");             // Big Int
let bi = BigInt('1') + BigInt("2"); // Should be equal to 3 
let e = "Fasih Muhammad Virk";      // String 
let f = Symbol("I am a Symbol")     // Symbol
let g = undefined                   // Undefined
let h // this is also undefined     // Undefined

// Printing values of all variable.
console.log(a, b, c, d, bi, e, f, g, h)

// Checking the type of the variable
console.log(typeof d) // type of d is bigint
console.log(typeof f) // type of f is symbol


// ** Objects  or Non - Primitive Data Type in Java Script ** // 
console.log("Working with Objects in JS")

    // * info * // Object is js are key value pairs.
    // * info * // it is like a dict in python but we call it object in js.
    // * info * // objects is basically used to create key value pair.

const item = {

    "Fasih": true,
    "Graduate": false,
    "Age" : 28,
    "Occupation":"Software Engineer",
    "Hobbies":undefined

}

console.log(item["Fasih"]) // will print true
console.log(item["Hobbies"]) // will print undefined

// or 

const person = {
    name: 'John',
    age : 30,
    city:'New York'
    }

console.log(person["name"]) // will print Jhon.

    // * info * // if the key is not present in the object it will give us undefined.
console.log(person['firstname']) // will print undefined