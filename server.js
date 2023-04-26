const express = require('express')
const app = express()
const port = 8080;
const path = require('path')



app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', "index.html"))
})

app.listen(port, () => {
    console.log(`run running on URL: http://localhost:8080`)
})

