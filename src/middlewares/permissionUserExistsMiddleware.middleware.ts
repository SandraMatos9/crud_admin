import { NextFunction,Request,Response } from "express"
import { AppError } from "../error"
import jwt from "jsonwebtoken"


const permitionTokenAdminMiddlewate = async(
    req:Request,
    res:Response,
    next:NextFunction
):Promise<Response|void>=>{
    const idParams = req.params.id
    const isAdmin = res.locals.tokenAdmin 
    const tokenId= res.locals.tokenId

    if(req.route.path=== "/:id/recover" && req.method =="PUT"){
        if( isAdmin===false){
            throw new AppError("Insufficient Permission",403)

        }
       }

   if((idParams!=tokenId)  &&   isAdmin===false){
    throw new AppError("Insufficient Permission",403)
   }

   
next()
  
}
export{permitionTokenAdminMiddlewate}