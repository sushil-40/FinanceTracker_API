import express from "express";
import { insertTransaction } from "../models/transaction/transactionModel";

const router = express.Router();

//insert transaction

router.post("/", async (req, res, next) => {
  try {
    const { _id } = req.userInfo;
    console.log("test-user from transaction page", _id);

    //inserting userId as a new property to the transaction from userTable utilizing auth middleware

    req.body.userId = _id;
    console.log(req.body);

    const result = await insertTransaction(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "New transaction added successfully !",
        })
      : res.json({
          status: "error",
          message: "Unable to add new transaction, tryagain later !",
        });
  } catch (error) {
    console.log(error);
  }
});

export default router;
