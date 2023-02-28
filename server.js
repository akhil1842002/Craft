const express = require('express')
const app =  express()
require('dotenv').config()
const bodyParser = require('body-parser')
const path = require('path')
const { main } = require('./database/connect')

app.set("view engine","html")

const Port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,'/public/')))
app.use(express.static(path.join(__dirname,'/Craft_Admin/')))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'/public/','index.html'))
})

app.get('/admin',(req,res) => {
    res.sendFile(path.join(__dirname,'/Craft_Admin/','home.html'))
})

app.listen(Port,() => {
    console.log(`Server is listening at http://localhost:${Port}`);
})