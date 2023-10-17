// import express

let expressApp = require('express')
let mongoose = require("mongoose")
let pro = require("./programming")
let cors = require("cors")

// create express app

let app = expressApp()

// enable express app to use JSON content-type
app.use(expressApp.json())

// enable cors
app.use (cors())
// define a port where API will be exposed

let PORT = 1234

//setup temprary data souce
let videos = [
    {
        'id': 1,
        'videoid': 'k4V3Mo61fJM',
        'title': 'Fix you'
    },
    {
        'id': 2,
        'videoid': 'yKNxeF4KMsY',
        'title': 'Yellow'
    }

]

// setup connection string
let connectionString = "mongodb+srv://siongthye:siongthyepassword@cluster0.ve3v88j.mongodb.net/youtubeDB"
// use connectionString to connect to db
mongoose.connect(connectionString)
let db = mongoose.connection

// check if the connection is successful
db.once("open",()=>{
    console.log("Connected to the mongoDB in cloud")
})



//create first API
// http://localhost:1234/youtube/welcome
// API endpoint -> /youtube/welcome
// API URL -> http://localhost:1234/youtube/welcome
app.get('/youtube/welcome', (request, response) => {
    // API implementation
    console.log('endpoint called:/youtube/welcome with GET request')
    response.send('Hello from youtube server,GET')

})


//create second API
// http://localhost:1234/youtube/welcome
// API endpoint -> /youtube/welcome

// API URL -> http://localhost:1234/youtube/welcome
app.post('/youtube/welcome', (request, response) => {
    // API implementation
    console.log('endpoint called:/youtube/welcome with POST request')
    response.send('Hello from youtube server,POST')

})

// GET http://localhost:1234/youtube/all
app.get('/youtube/all', (request, response) => {
    console.log('endpoint called: /youtube/all with GET Request')
    // response.send(videos)
    // connect mongodb in clud and get all documents
    pro.find({})
        .then((data)=>{
            console.log(data)
            response.json(data)
        })
        .catch((error)=>{
            console.log(error)
            response.json(error)
        })
})


// POST http://localhost:1234/youtube/add
app.post('/youtube/add', (request, response) => {
    console.log('endpoint called: /youtube/add with POST request')
    // console.log(request)
    console.log(request.url)
    console.log(request.method)
    console.log(request.body)
    // add or push the value in request.body to videos array
    // the add has to be in JSON format, with double ""
    videos.push(request.body)
    // send back the updated videos array as response
    response.send(videos)
})



// start/fire api at given port
app.listen(PORT, () => {

    console.log('Listening to port:' + PORT);
})




// GET --> to retrieve the resource
// POST --> add the new resource
// PUT --> update the resource
// DELETE --> delete the resource


