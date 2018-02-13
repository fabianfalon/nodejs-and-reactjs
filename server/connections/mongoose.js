const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/stockApp')

module.exports = mongoose
