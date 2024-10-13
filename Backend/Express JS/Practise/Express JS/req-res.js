const express=require("express");
const app=express();
const port=3000;
const blog=require('./routes/blog')

app.use(express.static('public'))
app.use('/blog',blog);
// app.get('/',(req,res)=>{
//     res.send('Hello World!')
// })

// app.post('/',(req,res)=>{
//     res.send('Hello this is post request')
// })

//Chainig requests
app.get('/',(req,res)=>{
    res.send('Hello World!')
}).post('/',(req,res)=>{
    res.send('Hello this is post request')
})

app.put('/',(req,res)=>{
    res.send('Hello this is put request')
})

app.get('/index',(req,res)=>{
    res.sendFile('templates/index.html',{root:__dirname});
    console.log(__dirname);
})

app.get('/api',(req,res)=>{
    res.json({a:1,b:2,c:3,d:4})
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})