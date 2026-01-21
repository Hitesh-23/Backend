const express = require("express")



const app = express()


app.get('/', function(req, res){
    res.send('Hello World')
})

app.get('/home', (req, res) => {
    res.send('This is home')
})

app.get("/about", (req, res) => {
    res.json({id : "This is about page"})
    console.log(res)
})

app.get('/login', function(req, res){
    res.send("Hello bhai")
})

app.listen(3000, function(){
    console.log("Your port is running at 3000")
});
