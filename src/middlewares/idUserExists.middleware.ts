import { NextFunction, Response, Request } from "express";
import { QueryConfig, QueryResult } from "pg";
import { client } from "../database";
import { AppError } from "../error";
import { TUser } from "../interfaces/users.interfaces";

const idUserMiddlewareExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId: number = parseInt(request.params.id);
  const queryString: string = `
    SELECT
        *
    FROM
        users
    WHERE
        id=$1;
    
    `;

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [userId],
  };

  const queryResult: QueryResult<TUser> = await client.query(queryConfig);

  if (queryResult.rowCount === 0) {
    throw new AppError("User not found", 404);
  }

 if(request.route.path=== "/:id/recover" && request.method =="PUT"){
  if(queryResult.rows[0].active===true){
    throw new AppError("User already active", 400)
  }
 }
 

  response.locals.user = queryResult.rows[0];
  return next();
};
export { idUserMiddlewareExists };
