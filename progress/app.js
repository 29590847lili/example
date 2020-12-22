const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('hello world express')
})

app.get('/data.json', function (req, res) {
    res.sendFile(__dirname + '/data.json')
})

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
    console.log("app start listen")
})