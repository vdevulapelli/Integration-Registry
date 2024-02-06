// server.js

import express, { response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
//import Subscription from './SubModel.js';




// Initialize express app
const app = express();
const PORT = 3000; // Port for the server

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/IntegrationDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies


// app.get("/getSubscriptions", (req, res) => { 

//     res.send("Hello"); 
// }); 
  


// Define schema
const subscriptionSchema = new mongoose.Schema({
    systemID: String,
    systemName: String,
    orgID: Number,
    departmentName: String,
    systemDescription: String,
    eventCount: Number,
    protocol: String,
    _class: String
});

// Create model
const Subscription = mongoose.model('Subscription', subscriptionSchema);
// debugger;

// // API endpoint to fetch subscriptions
app.get('/getSubscriptions', (req, res) => {
    debugger;
    console.log("subscription",Subscription);
    console.log("subscriptionSchema",subscriptionSchema);
    console.log("test");
    debugger;
    // Subscription.find(()=>{
    //     if(err)
    //     {
    //     }
    //     else
    //     {
    //         res.json(val);
    //         console.log(val);
    //         res.send(val);
    //     }
    // })
    Subscription.find().then((result)=>{
        console.log("result",result);
        res.status(200).json(result);
    })
    .catch((error)=>{
        res.status(500).json(error)    
  })
});

app.get("/api/Subscriptions", (req, res) => { 
    // database.collection('Subscriptions').find({}).toArray(err,result)=>{
    //     if(err)throw err
    //     response.send(result)
    // }; 
}); 
  
app.listen(PORT, () => { 
    console.log("listening on http://localhost:3000"); 
})


// Start the server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
