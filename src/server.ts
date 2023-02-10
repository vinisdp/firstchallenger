import express, { Request, Response, NextFunction } from "express";
import { userRouter } from "./modules/user/userRouter.js";

const app = express();

app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.send("Hello World");
});
app.use("/api/v1/user", userRouter);
app.listen(3000, () => {
  console.log("Server started on port 3000!");
});
