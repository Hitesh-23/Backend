const express = require("express")

const app = express()

app.use(express.json())

let notes = []

app.post('/notes', (req, res) => {
    notes.push(req.body)
    res.send('Notes Created Successfully')
})

app.get('/notes', (req, res) => {
    res.send(notes)
})

app.delete('/notes/:index', (req,res) => {
    delete notes[req.params.index]
    res.send("note deleted successfully")
})

app.patch('/notes/:index', (req, res) => {
    notes[req.params.index].last_name = req.body.last_name
    res.send("Details Updated successfully")
})


app.put('/notes/:index', (req, res) => {
    notes[req.params.index].last_name = req.body.last_name
    notes[req.params.index].first_name = req.body.first_name
    res.send("Details Updated successfully")
})


module.exports = app

