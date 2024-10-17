import express from "express";
import mongoose from "mongoose"
const app=express()
const port =3000

await mongoose.connect("mongodb://localhost:27017/Employees")

const sch={
    name:String,
    salary:Number,
    language:String,
    city:String,
    isManager:Boolean
}
const Db=mongoose.model('employees',sch)

app.get('/',async (req,res)=>{
    let emp=await Db.find({})
    res.json(emp)
})

app.use(express.json())

app.post("/post",async (req,res)=>{
    try{
        let result=new Db({name:req.body.name,salary:req.body.salary,lanuage:req.body.language,city:req.body.city,isManager:req.body.isManager})
        const save=await result.save()
        console.log(save);
        res.json(await Db.find({}))
    }catch(err){
        console.log(err);
    }
})
app.delete('/delete',async (req,res)=>{
    try{
        await Db.deleteMany({})
        res.send('deleted')
    }catch(err){
        console.log(err);
    }
})


app.listen(port,()=>{
    console.log(`Example running on port ${port}`);
})