const express = require("express")
const mongoose = require("mongoose")
const urlModel = require("./model/urlModel")
const route = require("./route/route")
const cors = require('cors')

const app = express()
app.use(express.json())

app.use(cors("*"))
app.use("/", route)

mongoose.connect("mongodb+srv://amanprajapat82780:Lucky82780@newproject.3qdy8y3.mongodb.net/url_shortner?retryWrites=true&w=majority",{
    useNewUrlParser:true
},mongoose.set('strictQuery', false)).then(()=>console.log("Mongoose Connected"))
.catch((err)=>console.log(err))

app.listen(8000, ()=>{
    console.log("server running on ", 8000)
})
