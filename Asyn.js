console.log("start");
setTimeout(()=>{
    console.log("setTimeOut2000");
}, 2000)

setTimeout(()=>{
    console.log("setTimeOut1000");
}, 1000)

Promise.resolve().then(()=>{
    
    console.log("I am promise")
    
    setTimeout(()=>{
    console.log("I am promise timeout");
}, 1000)
})
console.log("End")
