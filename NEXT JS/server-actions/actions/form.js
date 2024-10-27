"use server"

import fs from "fs/promises"

export const submitAction=async (e)=>{
    console.log(e.get("name"),e.get("add"));
    let a=await fs.writeFile("info.txt",`Name is ${e.get("name")} and address is ${e.get("add")}`)
    let b=await fs.readFile("info.txt").then((e)=>console.log(e.toString()))
}