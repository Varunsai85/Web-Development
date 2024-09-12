const express = require("express")
const app = express()
const port = 3000
const blog=require('./routes/blog.js')

app.use("/public",express.static("public"))
app.use('/blog',blog)
//Chainig of the requests
app.get('/', (req, res) => {
    console.log('Hey its a get request');
    res.send('Hello World!')
}).post('/',(req,res)=>{
    console.log("This POST request");
    res.send("POST response")
}).put("/",(req,res)=>{
    console.log('This is PUT request');
    res.send("PUT response")
}).delete('/',(req,res)=>{
    console.log('This is delete request');
    res.send("delete response")
})

//Serving HTML files
app.get('/index',(req,res)=>{
    res.sendFile("templates/indextemp.html",{root:__dirname})
})

//json response
app.get('/api',(req,res)=>{
    res.json({a:1,b:2,c:3,name:"Varun"})
})

app.listen(port, () => {
    console.log(`Server running in the port ${port}`);
})