const mongoose = require('mongoose')


async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo db connected successfully")  
    } catch (error) {
        console.log("Failed to connect database")
    }
}

module.exports = connectToDatabase