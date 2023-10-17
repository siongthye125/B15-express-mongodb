// create programming model
// it is mapped to collection name (programmingvideos collection)

// import mongoose
let mongoose = require("mongoose")

// use mongoose to create mongo schema
let mongoSchema = mongoose.Schema

// use mongoSchema to map with programmingvideos collection

let programmingCollection = new mongoSchema({
    "id":Number,
    "videoId":String,
    "title":String,
},{collection:"programmingvideos"})

// export the model
module.exports = mongoose.model("programming", programmingCollection)