const connectDb = require("./src/config/db")
const dotEnv = require('dotenv')
const app = require('./src/app')

dotEnv.config()


connectDb()


app.listen(3000, function(){
    console.log("Server is running at port 3000")
})