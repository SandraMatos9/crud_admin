import { Router } from "express";
import { createLoginUser } from "../services/login/createLoginUser.service";
import { createLoginUserController } from "../controllers/login.controllers";

const loginRouter = Router()
loginRouter.post("",createLoginUserController)

export default loginRouter