import { QueryResult } from "pg";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { client } from "../../database";
import { AppError } from "../../error";
import jwt from "jsonwebtoken";
import "dotenv/config"

const listAllUserService = async(
    // token:string|undefined
    ):Promise<Array<TUserResponse>> =>{
    // if(!token){
    //     throw new AppError("Token is missing!",401)
    // }
    //     token= token.split(" ")[1]

    // jwt.verify(token,process.env.SECRET_KEY!,(err:any,decoded:any)=>{
    //     if(err){
    //         throw new AppError(err.message,403)
    //     }
    // })


    const queryString:string = 
    `
    SELECT
        "id",
        "name",
        "email",
        "admin",
        "active"
    FROM
        users;
    `;

    const queryResult:QueryResult<TUserResponse> = await client.query(
        queryString
    );
    return queryResult.rows;

};
export default listAllUserService