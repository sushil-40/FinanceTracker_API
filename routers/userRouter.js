import express from "express";
import { insertUser } from "../models/user/UserModel.js";
import { hashPassword } from "../utils/bcrypt.js";

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
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
// User Login

// User Profile

export default router;
