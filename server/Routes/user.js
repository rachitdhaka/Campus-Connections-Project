const { Router } = require("express");
const UserRouter = Router();
const { userModel } = require("../db/db");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const zod = require("zod");
const JWT_USER = process.env.JWT_USER;
const { userAuthMiddleware } = require("../middleware/userAuth");

// this is thesignup endpoint
UserRouter.post("/CreateAccount", async (req, res) => {
  const {
    email,
    password,
    name,
    company,
    workingLocation,
    contact,
    batchYear,
    course,
  } = req.body;
  const salts = 5;

  const hashedPassword = await bcrypt.hash(password, salts);

  try {
    await userModel.create({
      email,
      password: hashedPassword,
      name,
      company,
      workingLocation,
      contact,
      course,
      batchYear,
    });

    res.json({
      message: "Sign up Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message || error,
    });
  }
});

// this is the Login endpoint
UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const findUser = await userModel.findOne({
    email,
  });

  if (!findUser) {
    return res.status(403).json({
      message: "User not found",
    });
  }
  const verifyPassword = await bcrypt.compare(password, findUser.password);

  if (!verifyPassword) {
    return res.status(403).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: findUser._id,
    },
    JWT_USER
  );

  res.json({
    token,
  });
});

UserRouter.post("/userInformation", (req, res) => {
  const { name, email, company, workingLocation, contact, batch, course } =
    req.body;

  try {
    userModel.create({
      name,
      email,
      company,
      workingLocation,
      contact,
      batch,
      course,
    });

    res.json({
      message: "Information Stored",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message || error,
    });
  }
});

UserRouter.get("/dashboard",  async(req, res) => {
    try {
    const data = await userModel.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error.message,
    });
  }
});

module.exports = {
  UserRouter,
};
