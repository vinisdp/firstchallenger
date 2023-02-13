import { Request, Response } from "express";
import { IEvent } from "./eventInterface";
import { v4 as uuid } from "uuid";

const events: IEvent[] = [];
const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


export const eventCreate = async (req: Request, res: Response) => {
  const { description, dateTime } = req.body;
  const createAt: Date = new Date();
  const id: string = uuid();


  const event: IEvent = {
    description,
    dateTime,
    createAt,
    id,
  };


  events.push(event);
  res.json(event);
};

export const eventBusca = async (req: Request, res: Response) => {
  if (req.query.dayOfTheWeek) {
    const { dayOfTheWeek } = req.query;
    const eventWeek: IEvent[] = events.filter((event: IEvent) => {
      try {
        const day = new Date(event.dateTime).getUTCDay();
        if (dayOfTheWeek === days[day]) {
          return event;
        }
      } catch (error) {
        throw error;
      }

    });
    res.json(eventWeek);
  } else {
    res.json(events);
  }
};

export const buscaID = async (req: Request, res: Response) => {
  const { id } = req.params;

  const event = events.find(
    (event) => event.id === id
  );
  res.json(event);
};

export const eventDeleteId = async (req: Request, res: Response) => {
  const { id } = req.params;

  const eventDel = events.findIndex((event) => event.id === id);
  if (eventDel !== -1) {
    events.splice(eventDel, 1);
    res.json({ message: "Event deleted!" });
  } else {
    res.json({ message: "Event not found!" });
  }
};

export const eventDeleteDayOfTheWeek = async (req: Request, res: Response) => {
  const { dayOfTheWeek } = req.params;
  if (req.query.dayOfTheWeek) {
    if (req.query.dayOfTheWeek) {
      const { dayOfTheWeek } = req.query;
      const eventWeek: IEvent[] = events.filter((event: IEvent) => {
        try {
          const day = new Date(event.dateTime).getUTCDay();
          if (dayOfTheWeek !== days[day]) {
            return event;
          }
        } catch (error) {
          throw error;
        }

      });
      events.splice(0, events.length, ...eventWeek);
      res.json(events);
    } else {
      res.json(events);
    }
  } else {
    res.status(401).json({ message: 'Unauthorized!' })
  }
};


