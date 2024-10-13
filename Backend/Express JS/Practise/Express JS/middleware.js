const express = require('express')
const app = express()
const blog=require('./routes/blog.js')
const port = 3000

app.use(express.static('public'))
app.use('/blog',blog)

app.use('/blogmw',(req,res,next)=>{
  console.log("custom middleware is executed");
  next();
})

app.get('/blogmw',(req,res)=>{
  res.send('hello this is middleware for blog')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})