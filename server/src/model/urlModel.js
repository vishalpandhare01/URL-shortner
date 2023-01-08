const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true
    },

    shortUrl: {
        type: String,
        required: true,
        unique: true 
    },

    urlCode: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
})

module.exports = mongoose.model("URL", urlSchema)
