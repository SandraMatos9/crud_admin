import { TLoginRequest, TLoginResponse } from "../interfaces/login.interfaces"
import { requestUserSchema } from "../schemas/users.schemas"

const loginController = async (req:Request, res:Response):Promise<Response> =>{

    const userData:TLoginRequest=requestUserSchema.parse(req.body)
    const token:TLoginResponse= ""
    return res.status(201).json(newUser)
    
 
    
    
  
}