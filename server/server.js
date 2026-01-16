const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose')
const cors = require("cors");
require('dotenv').config();


// importing all the routes here
const { UserRouter } = require("./Routes/user");

app.use(cors());
app.use(express.json());

app.use("/user", UserRouter);
// app.use("/admin", AdminRoute);

const main= async()=>{
    await mongoose.connect(process.env.mongoUrl);
    console.log("DataBase Connected");
    app.listen(1000)
}
main();
