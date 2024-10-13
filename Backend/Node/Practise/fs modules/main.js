const fs=require("fs");

console.log("Starting");
fs.writeFile("varun2.txt","Hello this is a demo",async ()=>{
    console.log("writing the file done!");
    await fs.readFile("varun2.txt",(e,d)=>{
        console.log(d.toString());
    })
})

fs.appendFile("varun2.txt"," this is append method in fs",(e,d)=>{
    console.log(d);
})
console.log("Ending");