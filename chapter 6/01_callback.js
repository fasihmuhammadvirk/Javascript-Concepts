// **  Synchronous Programming ** //
// const prompt = require("prompt-sync")();

// let a = prompt("What is your name: ");
// let b = prompt("Wha is your age: ");
// let c = prompt("what is your favourite color: ");

// console.log(a + " is " + b + " year old and has " + c + " favorite color. ");
// the above is the example of the synchronous programming
// it will wait for user input before moving to next line

// **  Synchronous Programming ** //
// console.log('Start')
// setTimeout(function(){
//     console.log('Hey i am good.'); // This will be printed after 3 sec and the start and the end will be printed before it.
//     },3000);
// console.log('End')




// the below code is for the browser
// ** CallBack ** //

/* 
we have a loadscript function and we want that if we load the script we want to
call a funtion hello with it 
the funcion or callback can also take an argument in the funciton and whenever we call
it, it will show use the output of the function
*/


// // simple loadscript without the call back
// function loadscript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;

//   // in this line we are defining that if the script is loaded then run the
//   // function which say to call back and print in the console loaded etc.
//   script.onload = function () {
//     console.log("Loaded Script with SRC: " + src);
//     callback(src);
//   };

//   // appending the script in the body
//   document.body.appendChild(script)
// }
// // simple callback funciton 
// function hello(src) {
//   alert("Hello World!\n" + src);
// }

// // simple callback funciton 
// function hello(src) {
    //   alert("Hello World!\n" + src);
    // }
    
    // // calling the function loaded script and also giving the callback function
    // loadscript(
    //     "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
    //     hello
    //     );
    
// loadscript funciton with error handling
function loadscript(src, callback) {
    var script = document.createElement("script");  
  script.src = src;
  
  // in this line we are defining that if the script is loaded then run the
  // function which say to call back and print in the console loaded etc.
  script.onload = function () {
    console.log("Loaded Script with SRC: " + src);  
    callback(src);
  };  

  script.onerror = function(){
    console.log("Error loading script with SRC: " + src)
    callback(new Error("Src got some error"))
  }
  
  // appending the script in the body
  document.body.appendChild(script)
}  

// function with the error handling
function hello_error(error,src){
    if(error){
        console.log(error)
        return
    }
    alert("Hello World\n" + src)
    
}


// calling the function loaded script and also giving the callback function
// script with the error
loadscript(
    "https://cdn.fasih.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
    hello_error
    );
    