import { Request, Response, request, response} from 'express';
import createUsersService from '../services/createUser.service.ts.js';
import listUserService from '../services/listUsers.services.js';
import { idUserService } from '../services/idUser.services.js';
import { any } from 'zod';
import { requestUserSchema } from '../schemas/users.schemas.js';
import { TUserRequest } from '../interfaces/users.interfaces.js';

const createUsersController = async (req:Request, res:Response):Promise<Response> =>{

    const userData:TuserRequest=requestUserSchema.parse(req.body)
    const newUser:TuserResponse = await createUsersService(userData)
    return res.status(201).json(newUser)
    
 
    
    
  
}

const listUserController = async (
    req:Request,
     res:Response
     ):Promise<Response> =>{
     
        const users = await listUserService
        return res.json('users')

}

const idUserController= async (
    req:Request,
     res:Response
     ):Promise<Response> =>{

          
            const user = res.locals.user
            return res.json(user)
            
      
 }

 const updateUserController= async(
    req:Request,
    res:Response
 ):Promise<Response> =>{
const userId:number=parseInt(request.params.id)
const userData:TUserUpdateRequest=(req.body)
const updateUser = await updateUsersService(userId,userData)
return response.json(updateUser)

}
 
const 
export{createUsersController,listUserController,idUserController,updateUserController}