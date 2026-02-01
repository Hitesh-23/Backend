const mongoose = require('mongoose')



async function connectDb(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Mongo Db connected sucessfully")
}


module.exports = connectDb