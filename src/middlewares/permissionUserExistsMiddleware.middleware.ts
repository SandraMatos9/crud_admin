import { NextFunction,Request,Response } from "express"
import { AppError } from "../error"
import jwt from "jsonwebtoken"


const permitionTokenUserExistsMiddlewate = async(
    req:Request,
    res:Response,
    next:NextFunction
):Promise<Response|void>=>{
    let token = req.headers.authorization
    console.log(token)
   const{id} = res.locals;
   const admin=id
   if(admin>5){
    throw new AppError("Insufficient Permission",403)
   }

  
}
export{permitionTokenUserExistsMiddlewate}