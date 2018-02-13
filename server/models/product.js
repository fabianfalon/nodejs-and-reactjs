const mongoose = require('../connections/mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  stock: Number,
  createDate: {type: Date, default: Date.now}
})

const Product = mongoose.model('product', productSchema)

module.exports = Product
