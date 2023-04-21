import { Request,Response } from "express"
import {  TLoginResponse } from "../interfaces/login.interfaces"
import { createLoginUser } from "../services/login/createLoginUser.service"


export const createLoginUserController = async(
    req:Request,
    res:Response)
    :Promise<Response> =>{
   
    const token:TLoginResponse= await createLoginUser(req.body)
    return res.status(200).json(token)
  
}