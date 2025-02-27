import express from "express";
import { conMongoDb } from "./config/mongodbConfig.js";
const app = express();
const PORT = process.env.PORT || 8000;

// Connect DB
conMongoDb();
// Middlewares
app.use(express.json());

// Api endpoints
import userRouter from "./routers/userRouter.js";

app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "It's a GET test.",
  });
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
