import express from "express"
const app=express()
const port=3000
import mongoose from "mongoose"
import Emp from './models/employee.js'
// import Emp from "./models/employee.js"

app.set('view engine','ejs')

await mongoose.connect("mongodb://localhost:27017/company")

const getrandom=(ele)=>{
    let randnum=Math.floor(Math.random()*(ele.length))
    return ele[randnum]
}

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/generate',async (req,res)=>{
    await Emp.deleteMany({})

    let randnaam=['Varun','Dharani','Kiran','Siva','Hero']
    let randlang=['Java','Python','C++','JavaScript','C#']
    let randcity=['Vizag','Vijayawada','Delhi','Mumbai','Delhi']

    for (let index = 0; index < 10; index++) {
        let emp=await Emp.create({
            naam:getrandom(randnaam),
            salary:Math.ceil(Math.random()*55000),
            language:getrandom(randlang),
            city:getrandom(randcity),
            isManager:(Math.random()>0.5)?true:false
        })
        emp.save()
        console.log(emp);
    }
    res.render('index')
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})