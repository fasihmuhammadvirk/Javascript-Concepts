//* Tips *// Try to use const as much as possible and where you can not use const use let and donot use var

    //* Info *// var = we use use var to declare variable before ES6, but var can introduce bugs in our program so we stop using it after ES6.
    //* Info *// const = we use const keyword to declare the constant in js, whose value cannot be changed through out the js program.
    //* Info *// let = we use let to to declare blocked scoped variables.

console.log("Explaining var, let and const")

    //* Info *// in late 90's when js was introduced we use to declare variable like this.
    //* Info *// it is globally scope if we declare a variable in var it can be acess globally.
    //* Info *// while let and const are locally scoped or blocked scoped

//var a_number = 9
// var a_string = "fasih"
// var empty_var = null
// var not_defined = undefined

let a_let_string = "fasih2"
let not_defined = undefined
let empty_var = null

// var a_number = 10 // we can even re declare the variable again if we are using var. 
// let a_let_string = "fasih new" // but if we do the same with let it will throw an error.

//this is a block
{
        //* Info *// in this block we have changed the value of the both variable one delare with var and one with let.
        //* Info *// but what we will observe that the let value is changed inside the block, while the var changed the value of the previous variable also that is outside the block. 

    // var a_string = "fasih changed to this"
    // console.log(a_string)
    
        //* Info *// the scope of let is to block level
    let a_let_string = "fasih2 is not changed to this"
    console.log(a_let_string)
}

console.log(a_let_string)
//console.log(a_string)

    //const value can't be changed

const code_auth = "Fasih Muhammad Virk" // it can't be update or re declare.

    //* info *// and we have to initialize the value of the cosnt we can not declare it after.
    // const un_initialize_var; // we can not do this.

