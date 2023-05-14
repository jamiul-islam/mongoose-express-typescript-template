import { NextFunction, Request, Response } from "express";
import {
  createUser,
  getAdminUsersFromDB,
  getUserById,
  getUsers,
} from "./user.services";

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUser(data);
  res.status(200).json({ status: "success", data: user });
};

export const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUsers();
  res.status(200).json({ status: "success", data: user });
};

export const getUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = await getUserById(id);
  res.status(200).json({ status: "success", data: user });
};

export const getAdminController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const admin = await getAdminUsersFromDB();
  res.status(200).json({ status: "success", data: admin });
};

// router --> controller --> service
