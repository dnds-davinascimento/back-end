const express = require('express')
const cors = require("cors")
require('dotenv').config()
const path = require('path');
const app = express()

app.use(cors())
app.use(express.json())

app.use('/files', express.static(path.resolve (__dirname, '..','uploads')));
const conn = require("./db/conn")

conn()



// npm start
app.listen(process.env.DB_PORT, function(){
    console.log("servidor online!!")
    
})