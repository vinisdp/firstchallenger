import { Request, Response } from "express";
import { IUser } from "./userInterface";

const users: IUser[] = [];

export const userIndex = async (req: Request, res: Response) => {
  res.json(users);
};

export const singUp = async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    birthDate,
    city,
    country,
    email,
    password,
    confirmPassword,
  } = req.body;
  const user: IUser = {
    firstName,
    lastName,
    birthDate,
    city,
    country,
    email,
    password,
    confirmPassword,
  };
  users.push(user);
  res.json(user);
};

export const singIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  console.log(user);
  res.json(user);
};

export const userDelete = async (req: Request, res: Response) => {
  const { email } = req.params;

  const userDel = users.findIndex((user) => user.email === email);

  users.splice(userDel, 1);
  res.json({ message: "User deleted!" });
};
