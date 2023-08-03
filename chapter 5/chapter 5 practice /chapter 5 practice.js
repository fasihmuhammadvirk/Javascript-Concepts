const prompt = require("prompt-sync")();

// // Question 1 in the notes.

let arr = [1, 2, 3, 4, 5, 6, 7];
let Num
do{

    Num = parseInt(prompt("Enter a Number: "))
    arr.push(Num)
    console.log("\nNumber added in the current array: ", arr)
    let userInput = prompt("Enter y to continue and n to exit: ")
}while(userInput.toLowerCase() != 'n')
console.log("\n",arr)

// // Question 2 in the notes.

let num 
// do{

//     num = parseInt(prompt("Enter a Number: "))
//     arr.push(num)
//     console.log("\nNumber added in the current array: ", arr)
// }while(num != 0)

// console.log("After Adding all Numbers: ",arr)

// // Question 3 in the notes.

// let newarr = [10,23,20,40,43,50,45,66,76,300]

// let filter_arr = newarr.filter((div_10 = (num)=>{
//     return num % 10 === 0;
// }
// ))
// console.log(filter_arr)

// // Question 4 in the notes.

// let arr4 = [1,2,3,4,5,6,7,8,9]

// let sqr_arr = arr4.map((square=(x)=>{

//     return x*x

// }))

// console.log(sqr_arr)

// // Question 4 in the notes

let arr5 = [1,2,3,4,5,6,7]

let fac_arr = arr5.reduce((fac=(x1,x2)=>{

    return x1*x2

}))

console.log(fac_arr)