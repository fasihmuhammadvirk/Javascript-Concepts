

async function fasih(){
    let LahoreWeather = new Promise((resolve,reject)=>{
    
        setTimeout(()=>{
            resolve("27 Degree")
        },1000)
    })
    
    let IslamabadWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("21 Degree")
        },2000)
    
    })

    console.log("Fetching Lahore Weather Please Wait... ")
    let lhrw = await LahoreWeather
    console.log("Fetched Lahore Weather: " + lhrw)
    
    console.log("Fetching Islamabad Weather Please Wait")
    let isbw = await IslamabadWeather
    console.log("Fetched Islamabad Weather: " + isbw)
    return [lhrw,isbw]


}

// async function execute parallel

const cherry= async ()=>{
    console.log("hey I am cherry and i am not waiting")
}


const mains = async()=> {
    
    console.log("Welcome to Weather Control Room")
    let a = await fasih()
    let b = await cherry()
}

mains()
