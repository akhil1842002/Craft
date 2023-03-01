const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const path = require('path')
const { main } = require('./database/connect')

const { headerImage, whoImage,
    workOneImage, workTwoImage,
    workThreeImage, workFourImage,
    primaryColor, secondaryColor,
    testOne, testTwo,
    testThree, testFour,
    testFifth, testSixth } = require('./controller/home')

const { portHeaderImage, portSecondaryColor,
        portPrimaryColor, portTestFifth,
        portTestSixth, portTestFour,
        portTestOne, portTestTwo,
        portTestThree } = require('./controller/portfolio')

app.set("view engine", "html")

const Port = process.env.PORT || 6000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.static(path.join(__dirname, '/public/')))
app.use(express.static(path.join(__dirname, '/Craft_Admin/')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/', 'index.html'))
})

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '/Craft_Admin/', 'home.html'))
})

// home

app.post('/add/primary/color', primaryColor)
app.post('/add/secondary/color', secondaryColor)
app.post('/add/header', headerImage)
app.post('/add/who', whoImage)
app.post('/add/work/one/image', workOneImage)
app.post('/add/work/two/image', workTwoImage)
app.post('/add/work/three/image', workThreeImage)
app.post('/add/work/four/image', workFourImage)
app.post('/add/home/first/test', testOne)
app.post('/add/home/second/test', testTwo)
app.post('/add/home/third/test', testThree)
app.post('/add/home/fourth/test', testFour)
app.post('/add/home/fifth/test', testFifth)
app.post('/add/home/sixth/test', testSixth)

// portfolio

app.post('/add/port/primary/color', portPrimaryColor)
app.post('/add/port/secondary/color', portSecondaryColor)
app.post('/add/port/header', portHeaderImage)
app.post('/add/port/first/test', portTestOne)
app.post('/add/port/second/test', portTestTwo)
app.post('/add/port/third/test', portTestThree)
app.post('/add/port/fourth/test', portTestFour)
app.post('/add/port/fifth/test', portTestFifth)
app.post('/add/port/sixth/test', portTestSixth)

app.listen(Port, () => {
    console.log(`Server is listening at http://localhost:${Port}`);
})