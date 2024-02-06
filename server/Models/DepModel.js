

const mongoose = require('mongoose')

const DepSchema = new mongoose.Schema({

    departmentName: String,

})

const DepModel = mongoose.model("departmentnames", DepSchema)
module.exports = DepModel


