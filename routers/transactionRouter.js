import express from "express";
import {
  deleteTransactions,
  getTransactions,
  insertTransaction,
} from "../models/transaction/transactionModel.js";

const router = express.Router();

//insert transaction

router.post("/", async (req, res, next) => {
  try {
    const { _id } = req.userInfo;

    //inserting userId as a new property to the transaction from userTable utilizing auth middleware

    req.body.userId = _id;

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
    next(error);
  }
});

// Return all the transactions for the specific users

router.get("/", async (req, res) => {
  try {
    // get all transactions
    //getting user Id from auth middleware
    const { _id } = req.userInfo;
    const transactions = (await getTransactions(_id)) || [];

    res.json({
      status: "success",
      message: "here are the transactions",
      transactions,
    });
  } catch (error) {
    next(error);
  }
});

// Delete transactoins;

router.delete("/", async (req, res, next) => {
  try {
    // receive ids[] and _id of user

    const ids = req.body;

    const { _id } = req.userInfo;
    // Perform the deletion query

    const result = await deleteTransactions(_id, ids);

    // response
    res.json({
      status: "success",
      message: result.deletedCount + "TODO transaction has been deleted",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
