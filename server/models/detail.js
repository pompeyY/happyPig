const mongoose = require('mongoose')
const Schema = mongoose.Schema

const detailSchema = new Schema({

})

const Detail = mongoose.model('Detail', detailSchema)
module.exports = Detail
