const express = require("express"); 
const cors = require("cors");
const app = express()
const mongoose = require("mongoose"); 
 
app.use(cors())
app.use(express.json()); 

mongoose.connect("mongodb+srv://shehryar:2001@cluster0.nnbpten.mongodb.net/?retryWrites=true&w=majority"); 


app.listen(3001, () => {

    console.log("server runs perfectly"); 
})