// const fs=require("fs");
// const fsp=require("fs/promises")
import fsp from "fs/promises";
// console.log("Starting");
// fs.writeFile("varun.txt","written using fs module",()=>{
//     console.log("done babu");
// });
// fs.appendFile("varun.txt"," also the author is varun",()=>{
//     console.log("hello");
//     fs.readFile("varun.txt",(e,d)=>{
//         console.log(e,d.toString());
//     })
// })
// console.log("ended");
let a=await fsp.readFile("varun.txt")
console.log(a.toString());