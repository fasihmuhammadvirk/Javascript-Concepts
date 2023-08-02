// ** Functions ** // 

function OneAverage(x,y){
    return 1+(x+y)
}

let a = 1;
let b = 2;
let c = 3;

console.log("One Plus Average of a and b is: ", OneAverage(a,b))
console.log("One Plus Average of b and c is: ", OneAverage(b,c))
console.log("One Plus Average of a and c is: ", OneAverage(a,c))

// ** Arrow Function ** //
    // prefer using arrow function in your program.

// this is also a way to write a function.
const sum = (p,q)=>{
    return p+q 
}
console.log(sum(2,3)) // expected output is 5.

const hello = () =>{
    console.log("Hello World")
}
// way to call the function in js.
hello()