import { NextFunction, Response } from "express";
import { request } from "http";
import { QueryConfig, QueryResult } from "pg";
import { client } from "../database";
import { AppError } from "../error";

const idUserMiddlewareExists = async(
    request:Request,
    response:Response,
    next:NextFunction

):Promisse<Response|void>=>{

    const userId:number=parseInt(req.params.id)
    const queryString:string=`
    SELECT
    *
    FROM
        users
    WHERE
        id=$1;
    
    `

    const queryConfig:QueryConfig={
        text:queryString,
        value:[userId],
    }

    const queryResult:QueryResult<TUser>= await client.queryConfig

    if(queryResult.rowCount===0){
        throw new AppError('User not found',404)
    }

    response.locals.user=queryResult.rows[0]
    return next()

}
export default idUserMiddlewareExists