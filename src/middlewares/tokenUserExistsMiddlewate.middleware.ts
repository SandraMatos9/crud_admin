import { NextFunction } from "Express"
import { QueryConfig } from "pg"
import { client } from "../database"
import { AppError } from "../error"

const tokenUserExistsMiddlewate = async(
    request:Request,
    response:Response,
    next:NextFunction

):Promise<Response|void>=>{

    const userId:number=parseInt(request.params.id)
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
export{tokenUserExistsMiddlewate}