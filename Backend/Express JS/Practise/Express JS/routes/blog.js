const express=require('express')
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("Hi this is blog")
})
router.get('/about-us',(req,res)=>{
    res.send("Hi this is blog about us")
})
router.get('/contact',(req,res)=>{
    res.send("Hi this is blog contacts")
})
router.get('/:slug',(req,res)=>{
    res.send(`Hi this is blog ${req.params.slug}`)
})

module.exports=router;