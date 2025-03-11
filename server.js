import express from "express";
import { conMongoDb } from "./config/mongodbConfig.js";
const app = express();
const PORT = process.env.PORT || 8000;
import cors from "cors";
// Connect DB
conMongoDb();
// Middlewares
// console.log(process.env.JWT_SECRET);
app.use(express.json());
app.use(cors());

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
