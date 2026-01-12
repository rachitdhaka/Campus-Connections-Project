const { Router } = require("express");
const { UserModel } = require("../DataBase/db");
const UserRouter = Router();

// UserRouter.post('/signup' , async (req , res)=>{
//     const { email, password, firstname, lastname} = req.body;

//     try {
//         const hashedPassword = await bcrypt.hash(password, 5);

//         await UserModel.create({
//             firstname ,
//             lastname,
//             email,
//             password: hashedPassword
//         })

//         res.json({
//             message : "userSign up successfull"
//         })
//     } catch (error) {
//         res.status(403).json({
//             message : error
//         })
//     }

// })

UserRouter.post("/signup", async (req, res) => {
  const {
    email,
    password,
    name,
    workinglocation,
    workingcompany,
    batch,
    contact,
  } = req.body;
  try {
    await UserModel.create({
      email,
      password,
      name,
      workinglocation,
      workingcompany,
      batch,
      contact,
    });

    res.json({
      message: "User signup successful",
    });
  } catch (error) {
    res.status(403).json({
      message: "Error during signup",
      error: error.message,
    });
  }
});

UserRouter.get("/information", async (req, res) => {
  try {
    const data = await UserModel.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error.message,
    });
  }
});

module.exports = UserRouter;
