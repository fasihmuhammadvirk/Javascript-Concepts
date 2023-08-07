let p1 = new Promise((resolve,reject)=>{

    // alert("Hey i am not resolved")
    setTimeout(()=>{
        resolve(1)
    },2000)


})

// the first handler will be printed first. 
// it is different then the promise chaining.
/* 
promise chaing is that attach a handler with the promise
and oska jo result aye gaa oske run hune ka wait kero and 
jaab oskaa result ayee toh phirr aeey kuch aur kero 

in chainig we have to wait for the result of previous handler 
to execute the next one.
*/


// in this multiple handlers are executing on the result of the promise.
// independent of each other
p1.then(()=>{

    console.log("Hurray.")

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve(4)
        },6000)

    })
}).then((value)=>{
    console.log(`This value will be printed after 6 sec ${value}`)
    return trues

}).then((value)=>{

    console.log("This is the chained handler")
})


p1.then(()=>{
    console.log("Congratulations this promise is now resolved")
})
