import mongoose from "mongoose";
import express from "express";
const app=express()
import {Todo} from "./Models/Todo.js"; 
const port=3000;

let conn=await mongoose.connect("mongodb://localhost:27017/Todo")

app.get("/",(req,res)=>{
    const todo=new Todo({title:"Sleep",desc:"Sleep at 10pm",isDone:false,days:10})
    todo.save()
    res.send(`<b>Hello World!</b>`)
})

app.get("/a",async (req,res)=>{
    let todo=await Todo.findOne({})
    res.json({title:todo.title,decs:todo.desc,days:todo.days,taskdone:todo.isDone })
})

app.listen(port,()=>{
    console.log(`Site was listening at port ${port}`);
})