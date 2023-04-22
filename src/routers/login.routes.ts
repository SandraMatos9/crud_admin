import { Router } from "express";
import { createLoginUser } from "../services/login/createLoginUser.service";
import { createLoginUserController } from "../controllers/login.controllers";
import { verificationBodyIsValidMiddleware } from "../middlewares/verificationBodyIsValidMiddleware.middleware";
import { requestLoginSchema } from "../schemas/login.schemas";
const loginRouter = Router();
loginRouter.post(
  "",
  verificationBodyIsValidMiddleware(requestLoginSchema),
  createLoginUserController
);

export default loginRouter;
