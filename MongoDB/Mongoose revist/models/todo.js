import mongoose from "mongoose"

const TodoSchema=new mongoose.Schema({
    title:String,
    //title:{type:String , required:true, default:"Hey"} -> we can give the schema as an object to the attribute
    desc:String,
    isDone:Boolean,
    days:Number
})

export const Todo = mongoose.model('Todo',TodoSchema)