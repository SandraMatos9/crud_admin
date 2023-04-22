import { Router } from "express";
import {
  createUsersController,
  deleteUserController,
  idUserController,
  listUserController,
  recoverUserController,
  updateUserController,
} from "../controllers/users.controllers";
import { tokenUserExistsMiddlewate } from "../middlewares/tokenUserExistsMiddlewate.middleware";
import { permitionTokenAdminMiddlewate } from "../middlewares/permissionUserExistsMiddleware.middleware";
import { idUserMiddlewareExists } from "../middlewares/idUserExists.middleware";
import { verificationBodyIsValidMiddleware } from "../middlewares/verificationBodyIsValidMiddleware.middleware";
import { requestUserSchema, userSchemaPostUser, userSchemaUpdate } from "../schemas/users.schemas";
import { emailUserExistsMiddleware } from "../middlewares/emailUserExistsMiddleware.middleware";

const userRoutes: Router = Router();


userRoutes.post("", verificationBodyIsValidMiddleware(userSchemaPostUser),emailUserExistsMiddleware,createUsersController);

userRoutes.get(
  "",
  tokenUserExistsMiddlewate,
  permitionTokenAdminMiddlewate,
  listUserController
);
userRoutes.get(
  "/profile",
  tokenUserExistsMiddlewate,
  idUserController
);

userRoutes.patch(
  "/:id",
  tokenUserExistsMiddlewate,
  permitionTokenAdminMiddlewate,
  idUserMiddlewareExists,
  verificationBodyIsValidMiddleware(userSchemaUpdate),
  emailUserExistsMiddleware,
  updateUserController
);
userRoutes.delete(
  "/:id",
  tokenUserExistsMiddlewate,
  permitionTokenAdminMiddlewate,
  idUserMiddlewareExists,
  deleteUserController
  
);
userRoutes.put(
  "/:id/recover",
  tokenUserExistsMiddlewate,
  permitionTokenAdminMiddlewate,
  idUserMiddlewareExists,
  recoverUserController


);

export default userRoutes;
