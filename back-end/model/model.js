const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:String,
    description:String,
    qty:String,
    price:String,
    rating:String,
    image:String
})

module.exports = new mongoose.model('Product',productSchema);