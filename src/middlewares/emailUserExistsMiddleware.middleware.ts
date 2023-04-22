import { NextFunction } from "connect";
import { Request, Response } from "express";
import { QueryConfig, QueryResult } from "pg";
import { client } from "../database";
import { AppError } from "../error";
import { string } from "pg-format";

type TEmail = {
  email: string;
};

const emailUserExistsMiddleware = async (
  req: Request,
  res: Response, //response não está funcionando, assim como o problema com  a outra função que não tipa.
  next: NextFunction
): Promise<Response | void> => {
  const { email }: TEmail = req.body;

  if(email){
    const queryString: string = `
        SELECT
            *
        FROM
            users
        WHERE
            email=$1;
        
        `;
  const queryConfig: QueryConfig = {
    text: queryString,
    values: [email],
  };
  const queryResult: QueryResult = await client.query(queryConfig);
  // console.log(queryResult)

  if (queryResult.rowCount > 0) {
    throw new AppError("E-mail already registered", 409);
  }

  }
  
  return next();
};

export { emailUserExistsMiddleware };
