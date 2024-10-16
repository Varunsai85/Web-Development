import express from "express"
import { Todo } from "./models/todo.js"
const app = express();
const port = 3000

import mongoose from "mongoose"

const conn = await mongoose.connect("mongodb://localhost:27017/todo")

app.get("/", (req, res) => {
    let todo = new Todo({ title: "Jogging", desc: "Walk around park", isDone: false, days: 1 })
    todo.save()
    res.send("Hello World!");
})

app.get("/data", async (req, res) => {
    let todo = await Todo.find({})
    res.json(todo)
})

app.get("/killdata", async (req, res) => {
    await Todo.deleteMany({})
    res.send("Your data is deleted dude pandago")
})

app.listen(port, () => {
    console.log(`Example app listening on port : ${port}`);
})