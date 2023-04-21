import { Router } from 'express';
import {createUsersController, idUserController, listUserController, updateUserController } from '../controllers/users.controllers';
import { tokenUserExistsMiddlewate } from '../middlewares/tokenUserExistsMiddlewate.middleware';
import { permitionTokenUserExistsMiddlewate } from '../middlewares/permissionUserExistsMiddleware.middleware';
import verificationBodyIsValidMiddleware from '../middlewares/verificationBodyIsValidMiddleware.middleware';
import { requestUserSchema } from '../schemas/users.schemas';
const userRoutes:Router = Router()

userRoutes.post('/users',createUsersController)
userRoutes.post('/login')

userRoutes.get('',tokenUserExistsMiddlewate,permitionTokenUserExistsMiddlewate,listUserController)
userRoutes.get('/profile',tokenUserExistsMiddlewate,idUserController)

userRoutes.patch('/:id',idUserMiddlewareExists,tokenUserExistsMiddlewate,verificationBodyIsValidMiddleware(requestUserSchema),updateUserController)
userRoutes.delete('/users/:id',tokenUserExistsMiddlewate)
userRoutes.put('users/:id/recover',permitionTokenUserExistsMiddlewate,tokenUserExistsMiddlewate)

export default userRoutes

