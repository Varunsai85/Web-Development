const express=require("express")
const app=express()
const port=3000

app.set("view engine","ejs");

app.get('/',(req,res)=>{
    let siteName="Silk Road"
    let searchBox="Search Now"
    res.render("index",{siteName:siteName,searchBox:searchBox}) 
})

app.listen(port,()=>{
    console.log(`Server running in the port ${port}`);
})