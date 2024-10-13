const express=require("express");
const app=express();
const port=3000;

app.use(express.static('public')) // used to give public file to the web

app.get('/',(req,res)=>{
    res.send("Hello World!");
})
app.get('/blog',(req,res)=>{
    res.send(`Welcome to blog`)
})
//Creating parameters
app.get('/blog/:slug',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(`welcome to ${req.params.slug}`)
})


app.listen(port,()=>{
   console.log(`Example app listening in port ${port}`); 
})