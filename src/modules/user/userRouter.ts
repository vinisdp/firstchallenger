import { Router } from "express";
import { singIn, singUp, userIndex } from "./userController.js";

export const userRouter = Router();
userRouter.get("/", userIndex);
userRouter.post("/singup", singUp);
userRouter.post("/singin", singIn);
