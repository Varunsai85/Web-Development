const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let siteName = 'Twitter';
    let placeholder = 'Search Now';
    res.render('index', { siteName, placeholder })
})

app.get('/blog',(req, res) => {
    let siteName = 'Blog on twitter';
    let placeholder = 'Search Now';
    res.render('index', { siteName, placeholder })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})