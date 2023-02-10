import { Request, Response } from "express";
import { IEvent } from "./eventInterface.js";
import { v1 as uuid } from 'uuid';


const events: IEvent[] = [];

export const eventCreate = async (req: Request, res: Response) => {
  const { description, dataTime } = req.body;
  const createAt: Date = new Date();
  const id: string = uuid();
  const event: IEvent = {
    description,
    dataTime,
    createAt,
    id,
  };
  events.push(event);
  res.json(event);
};
