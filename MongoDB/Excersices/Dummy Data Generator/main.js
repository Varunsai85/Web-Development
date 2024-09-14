import express from "express"
import mongoose from "mongoose"
const app=express()
const port =3000;
import {model} from "./Models/validation.js"

app.set('view engine','ejs')

let conn=await mongoose.connect("mongodb://localhost:27017/Emploees")


app.get("/",(req,res)=>{
    res.render('index')
})

const getRandom = (arr)=>{
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}

app.get("/generate",async (req,res)=>{
    await model.deleteMany({})
    let randomNames = ['Rohan', "Sohan", "Mohan", "Sobhan"]
    let randomLang = ["Python", "js", "C++", "Java"]
    let randomCities = ["Bilaspur", "Moradabad", "Mysore", "Kolkata"]
    for (let i = 0; i < 10; i++) {
        let e = await model.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 22000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: (Math.random()>0.5)?true:false
        })
        console.log(e);
    }
    res.render('index')
})


app.listen(port,()=>{
    console.log(`The browser listening in the port ${port}`);
})