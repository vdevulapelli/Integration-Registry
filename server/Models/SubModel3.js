

const mongoose = require('mongoose')

const UserSchema3 = new mongoose.Schema({
    systemDescription: String,
})

const UserModel3 = mongoose.model("systemdescriptions", UserSchema3)
module.exports = UserModel3












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
