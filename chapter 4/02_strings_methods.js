// ** String Method ** // 

let myname  = "fasih"

// to find the length of the string
console.log(myname.length)

// to make the string into uppercase
console.log(myname.toUpperCase())

// to make the string into uppercase
console.log(myname.toLowerCase())

// get a portion of the string to one index to another
// it will give us the string starting from 2 index and till 3 
console.log(myname.slice(2,4)) // expected output si
//if we don't give slice the second argument it will print the string from index we give to the end.
console.log(myname.slice(2)) // expected output sih

// to replace a part in the string
console.log(myname.replace("fasih","Fasih Muhammad Virk"))

let friend = 'masif'
// to add different string together the string 
console.log(myname.concat(' is a friend of ', friend))

let name_with_space = '        fasih muhammad       '

// to eliminate the spaces from the start and from the end 
console.log(name_with_space)
console.log(name_with_space.trim())

// strings are immutable

let a_string = "fasih@anymail.com"

a_string[0]= 'M' // it will not work as a string can never be change we can concat two strings but not change
console.log(a_string)

console.log(a_string[0]) // expected output f
console.log(a_string[1]) // expected output a
console.log(a_string[2]) // expected output s
console.log(a_string[3]) // expected output i
console.log(a_string[4]) // expected output h
