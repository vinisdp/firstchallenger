import { Router } from "express";
import { userCreate, userIndex } from "./userController.js";

export const userRouter = Router();
userRouter.get("/", userIndex);
userRouter.post("/singup", userCreate);
