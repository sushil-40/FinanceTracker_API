import express from "express";
import { getUserByEmail, insertUser } from "../models/user/UserModel.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { compare } from "bcrypt";
import { signJWT } from "../utils/jwt.js";
import { auth } from "../middlewares/authMiddleware.js";

const router = express.Router();

// User SignUp
router.post("/", async (req, res, next) => {
  try {
    //get the user obj
    // data verification

    //encrypt the password
    req.body.password = hashPassword(req.body.password);
    console.log(req.body.password);
    //insert the user
    const user = await insertUser(req.body);

    user?._id
      ? //
        res.json({
          status: "success",
          message: "Your account has been created, you may login now!",
        })
      : res.json({
          status: "success",
          message: "Error creating user, Please try again later!",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.message =
        "this email id is already been used to create account,Please! try to login or use different email to signup!";
    }

    error.statusCode = 200;
    next(error);
  }
});
// User Login
router.post("/login", async (req, res, next) => {
  try {
    //1. receive email and password
    const { email, password } = req.body;
    console.log(email, password);
    if (email && password) {
      //2 find the user by email
      const user = await getUserByEmail(email);

      if (user?._id) {
        //3. match the password
        const isMatched = comparePassword(password, user.password);
        if (isMatched) {
          // the user actually authenticated
          //4. JWT and Store the jwt in db then return the user {} with jwt token

          const accessJWT = signJWT({
            // email: email,
            email,
          });

          user.password = undefined;

          res.json({
            status: "success",
            message: "Logged in successfully.",
            user,
            accessJWT,
          });
          return;
        }
      }
    }
    res.status(401).json({
      error: "Invalid email or password",
    });
  } catch (error) {
    // res.status(500).json({
    //   error: error.message,
    // });
    next(error);
  }
});

// User Profile from the accessJWT
// adding middle auth
router.get("/", auth, (req, res, next) => {
  try {
    //1. receive the token
    const user = req.userInfo;

    res.json({
      status: "success",
      message: "Here is the user profile",
      user,
    });
  } catch (error) {
    // res.status(500).json({
    //   error: error.message,
    // });
    next(error);
  }
});

export default router;
