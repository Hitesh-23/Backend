const express = require('express')


const app = express()

// this is the middleware for reading json data 
app.use(express.json());

let notes = []

app.post('/notes', (req, res) => {
    notes.push(req.body)
    res.send("Data Success fully added")
})

app.get('/notes', (req, res) => {
    res.send(notes)
})



app.listen(3000, () => {
    console.log("Server is running at port 3000")
})
