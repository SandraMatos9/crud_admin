import { Request, Response, request, response} from 'express';
import { requestUserSchema } from '../schemas/users.schemas.js';
import { TUserRequest, TUserResponse, TUserUpdateRequest } from '../interfaces/users.interfaces.js';
import createUsersService from '../services/users/createUser.service.js';
import listAllUserService from '../services/users/listAllUserService.service.js';
import updateUserService from '../services/users/updateUser.service.js';

const createUsersController = async (req:Request, res:Response):Promise<Response> =>{

    const userData:TUserRequest=requestUserSchema.parse(req.body)
    const newUser:TUserResponse = await createUsersService(userData)
    return res.status(201).json(newUser)
    
 
    
    
  
}

const listUserController = async (
    req:Request,
     res:Response
     ):Promise<Response> =>{
     
        const users = await listAllUserService()
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

const updateUser = await updateUserService(userId,userData)
return response.json(updateUser)

}
 

export{createUsersController,listUserController,idUserController,updateUserController}