import express from "express";

const router = express.Router();

//insert transaction

router.post("/", (req, res, next) => {
  try {
    const { _id } = req.userInfo;
    console.log("test-user from transaction page", _id);

    //inserting userId as a new property to the transaction from userTable utilizing auth middleware
    req.body.userId = _id;
    console.log(req.body);
    res.json({
      status: "success",
      message: "TODO insert new Transaction",
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
