const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Username already exists"],
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    bio: {
        type: String
    },
    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/kr0zlvzjt/default%20img.avif?updatedAt=1770986923222"
    }
})


const userModel = mongoose.model("users", userSchema)


module.exports = userModel