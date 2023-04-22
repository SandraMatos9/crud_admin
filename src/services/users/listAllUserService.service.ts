import { QueryResult } from "pg";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { client } from "../../database";
import { AppError } from "../../error";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { requestAllUsersSchema } from "../../schemas/users.schemas";

const listAllUserService = async (): 
Promise<Array<TUserResponse>> => {


  const queryString: string = `
    SELECT
        "id",
        "name",
        "email",
        "admin",
        "active"
    FROM
        users;
    `;

  const queryResult: QueryResult<TUserResponse> = await client.query(
    queryString
  );
  const users: TUserResponse[] = requestAllUsersSchema.parse(queryResult.rows);
  return queryResult.rows;
};
export default listAllUserService;
