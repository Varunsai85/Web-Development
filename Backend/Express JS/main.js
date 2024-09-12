const express=require("express")
const app=express()
const port=888
app.use(express.static('public'))
app.get("/",(req,res)=>{
    res.send('Hello World')
})
app.get("/:param",(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(`Welcome to ${req.params.param}`)
})
app.listen(port,()=>{
    console.log(`Current server is ${port}`);
})