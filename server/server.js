const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const UserRouter = require('./Router/User');

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user" , UserRouter);
// app.use("/admin" , AdminRouter);


const main= async()=>{
    await mongoose.connect(process.env.mongoUrl);
    console.log("DataBase Connected");
    app.listen(1000)
}
main();