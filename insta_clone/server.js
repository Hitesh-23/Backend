require("dotenv").config()
const app = require('./src/app')
const connectToDatabase = require('./src/config/database')

connectToDatabase()
app.listen(3000, function(){
    console.log("Server is running on port 3000")
})