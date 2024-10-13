const fs=require("fs/promises")

let a=async ()=>{
    let file=await fs.readFile("varun.txt");
    console.log(file.toString());
}

a();