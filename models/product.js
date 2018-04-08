const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  weight_kg: Number,
  edible: Boolean
})

const Product = mongoose.model('products', ProductSchema)

module.exports = Product
