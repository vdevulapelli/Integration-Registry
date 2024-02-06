

const mongoose = require('mongoose')

const UserSchema5 = new mongoose.Schema({
    protocol: String,
})

const UserModel5 = mongoose.model("protocols", UserSchema5)
module.exports = UserModel5












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
