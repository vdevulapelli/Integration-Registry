

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    systemID: String,
    systemName: String,
    orgID: Number,
    departmentName: String,
    systemDescription: String,
    eventCount: Number,
    protocol: String,

})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel












// // submodel.js

// import mongoose from 'mongoose';

// // Define schema
// const subscriptionSchema = new mongoose.Schema({
//     systemID: String,
//     systemName: String,
//     orgID: Number,
//     departmentName: String,
//     systemDescription: String,
//     eventCount: Number,
//     protocol: String,
//     _class: String
// });

// // Create model
// const Subscription = mongoose.model('Subscription', subscriptionSchema, 'subscription');

// export default Subscription;
