console.log("Callback functions and promise");
Promise
let prom1=new Promise((resolve,reject)=>{
    let a=Math.random()
    if(a<0.3){
        reject("You are rejected")
    }
    else{
        setTimeout(()=>{
            console.log("Code is done");
            resolve("You are accepted bro");
        },1000)
    }
})
prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})
Promise.resolve("Yoo")
//Callback functions
// console.log("Hello");
// const Callback=(arg,script)=>{
//     document.head.append(script)
//     console.log(arg);
// }
// function callbackloader(src,callback){
//     let script=document.createElement("script")
//     script.src=src
//     script.onload=callback("Scripttest is loaded",script)
// }
// callbackloader("scripttest.js",Callback)
// console.log("Welcome");