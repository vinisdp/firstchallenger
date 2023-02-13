import { Router } from "express";
import { buscaID, eventCreate, eventDeleteId, eventBusca, eventDeleteDayOfTheWeek } from "./eventController";

export const eventRouter = Router();
eventRouter.post("/", eventCreate);
eventRouter.get("/", eventBusca);
eventRouter.delete("/:id", eventDeleteId);
eventRouter.delete("/:day", eventDeleteDayOfTheWeek);

eventRouter.get("/:id",buscaID);
