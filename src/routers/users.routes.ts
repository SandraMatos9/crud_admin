import { Router } from 'express';
import { createUsersController, idUserController, listUserController, updateUserController } from '../controllers/users.controllers';
import emailExistsMiddleware from '../middlewares/emailUserExistsMiddleware.middleware';
import idUserMiddlewareExists from '../middlewares/idUserExists.middleware';
import { requestUserSchema } from '../schemas/users.schemas';
import verificationBodyIsValidMiddleware from '../middlewares/verificationBodyIsValidMiddleware.middleware';

const userRoutes:Router = Router()

userRoutes.post('',emailExistsMiddleware,verificationBodyIsValidMiddleware(requestUserSchema),createUsersController)
userRoutes.post('/login')
userRoutes.get('',listUserController)
userRoutes.get('/profile',idUserMiddlewareExists,idUserController)
userRoutes.patch('/:id',idUserMiddlewareExists,verificationBodyIsValidMiddleware(requestUpdateUserSchema)updateUserController)
userRoutes.delete('/users/:id')
userRoutes.put('users/:id/recover')

export default userRoutes

