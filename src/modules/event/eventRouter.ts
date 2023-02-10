import { Router } from "express";
import { eventCreate } from "./eventController";

export const eventRouter = Router();
eventRouter.post("/", eventCreate);
