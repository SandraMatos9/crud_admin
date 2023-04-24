import { Request, Response, request, response } from "express";
import { requestUserSchema } from "../schemas/users.schemas";
import {
  TUserRequest,
  TUserResponse,
  TUserUpdateRequest,
} from "../interfaces/users.interfaces";
import createUsersService from "../services/users/createUser.service";
import listAllUserService from "../services/users/listAllUserService.service";
import updateUserService from "../services/users/updateUser.service";
import idUserService from "../services/users/idUser.service"
import deleteUserService from "../services/users/deleteUser.service"
import recoverUserService from "../services/users/recoverUser.service"

const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserRequest =(req.body);
  const newUser: TUserResponse = await createUsersService(userData);
  console.log(newUser)
  return res.status(201).json(newUser);
};

const listUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await listAllUserService();
  return res.status(200).json(users);
};

const idUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.tokenId;
  const user = await idUserService(userId)
  return res.status(200).json(user);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);
  const userData: TUserUpdateRequest = req.body;

  const updateUser = await updateUserService(userId, userData);
  return res.status(200).json(updateUser);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);
  const deleteUser = await deleteUserService(userId)

  return res.status(204).json();
};


const recoverUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);
  const recoverUser = await recoverUserService(userId)

  return res.status(200).json(recoverUser);
};

export {
  createUsersController,
  listUserController,
  idUserController,
  updateUserController,
  deleteUserController,
  recoverUserController
};

