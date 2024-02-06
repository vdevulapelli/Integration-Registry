const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./Models/SubModel");
const UserModel2 = require("./Models/SubModel2");
const UserModel3 = require("./Models/SubModel3");
const UserModel4 = require("./Models/SubModel4");
const UserModel5 = require("./Models/SubModel5");
const DepartModel = require("./Models/DepModel");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/test");

app.get("/getusers", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.get("/getdepartments", (request, response) => {
  DepartModel.find()
    .then((departmentnames) => response.json(departmentnames))
    .catch((err) => response.json(err));
});
app.get("/getsystemnames", (req, res) => {
  UserModel2.find()
    .then((systemnames) => res.json(systemnames))
    .catch((err) => res.json(err));
});
app.get("/getsystemdescriptions", (req, res) => {
  UserModel3.find()
    .then((systemdescriptions) => res.json(systemdescriptions))
    .catch((err) => res.json(err));
});
app.get("/geteventcounts", (req, res) => {
  UserModel4.find()
    .then((eventcounts) => res.json(eventcounts))
    .catch((err) => res.json(err));
});
app.get("/getprotocols", (req, res) => {
  UserModel5.find()
    .then((protocols) => res.json(protocols))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is Running");
});

app.post("/register", (req, res) => {
  const data = new UserModel({
    departmentName: req.body.departmentName,
    systemName: req.body.systemName,
    systemDescription: req.body.systemDescription,
    eventCount: req.body.eventCount,
    protocol: req.body.protocol,
    orgID: 12345,
    systemID: "systemID",
  });

  const val=  data.save();
  res.send(val);
});

// import { MongoClient } from 'mongodb'
// import express from 'express';

// //const express=require('express');
// //const MongoClient=require('express');

// const app=express();
// app.use(express.json())
// var database
// app.get("/", (req, res) => {
//     res.send("Hello");
// });
// app.get("/getSubscriptions", (req, res) => {
// var url = "mongodb://127.0.0.1:27017/";
// const client = new MongoClient(url);
// console.log("getsubscription entered open");
// const database = client.db("IntegrationDb");
//     //const subscriptions = database.collection("Subscription");
//     //const data =  subscriptions.find();
//    console.log(database.Subscription.find({}));
//     //console.log("subscriptions",data);
//     // database.collection("Subscription").find({}).toArray(function(err, result) {
//     //     console.log("result",result);
//     //     if (err) throw err;
//     //     console.log(result);
//     //     db.close();
//     //   });
//     //console.log("subscriptions",subscriptions);

// });

// app.listen(5600, () => {
//     //var MongoClient = require('mongodb').MongoClient;

// });
