const express=require("express")
const router=express.Router()

router.get('/',(req,res)=>{
    res.send("Blog Home Page")
})

router.get('/about',(req,res)=>{
    res.send("About the blog");
})

router.get('/blogpost/:param',(req,res)=>{
    res.send(`This is bloggpost's ${req.params.param}`)
})

module.exports=router

