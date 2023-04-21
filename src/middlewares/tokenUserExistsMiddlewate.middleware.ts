import { NextFunction,Request,Response } from "express"
import { AppError } from "../error"
import jwt from "jsonwebtoken"


const tokenUserExistsMiddlewate = async(
    req:Request,
    res:Response,
    next:NextFunction
):Promise<Response|void>=>{
    
    let token = req.headers.authorization
    if(!token){
        throw new AppError("Token is missing!",401)
    }
        token= token.split(" ")[1]

    jwt.verify(token,process.env.SECRET_KEY!,(err:any,decoded:any)=>{
        if(err){
            throw new AppError(err.message,403)
        }
        res.locals.id= decoded.id
    })

  
}
export{tokenUserExistsMiddlewate}