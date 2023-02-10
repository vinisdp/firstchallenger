import { Request, Response} from "express";

interface IUser {
  firstName: string;
  lastName: string;
  birthDate: string;
  city: string;
  country: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const users: IUser[] = [];

export const userIndex = async (
  req: Request,
  res: Response,
) => {
  res.json(users);
};

export const userCreate = async (
  req: Request,
  res: Response,
) => {
  const {
    firstName,
    lastName,
    birthDate,
    city,
    country,
    email,
    password,
    confirmPassword
  } = req.body;
  const user: IUser = {
    firstName,
    lastName,
    birthDate,
    city,
    country,
    email,
    password,
    confirmPassword
  };
  users.push(user);
  res.json(user);
};

export const userView = async (req: Request, res: Response) => {
  const { email, password } = req.params;

  const user = users.find((user) => user.email === email);

  res.json(user);
};

export const userDelete = async (req: Request, res: Response) => {
  const { email } = req.params;

  const userDel = users.findIndex((user) => user.email === email);

  users.splice(userDel, 1);
  res.json({ message: "User deleted!" });
};
