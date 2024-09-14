import mongoose from "mongoose"

const validate=new mongoose.Schema({
    name:String,
    salary:Number,
    language:String,
    city:String,
    isManager:Boolean
})

export const model=mongoose.model('Employee',validate);
