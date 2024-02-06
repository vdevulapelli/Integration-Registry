

const mongoose = require('mongoose')

const UserSchema4 = new mongoose.Schema({
    eventCount: Number,
})

const UserModel4 = mongoose.model("eventcounts", UserSchema4)
module.exports = UserModel4












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
