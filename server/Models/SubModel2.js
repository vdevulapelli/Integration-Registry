

const mongoose = require('mongoose')

const UserSchema2 = new mongoose.Schema({
    systemName: String,
})

const UserModel2 = mongoose.model("systemnames", UserSchema2)
module.exports = UserModel2



