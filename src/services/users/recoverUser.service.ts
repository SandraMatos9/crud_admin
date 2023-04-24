import { QueryConfig, QueryResult } from "pg";
import {
  TUserRequest,
  TUserResponse,
  TUserUpdateRequest,
} from "../../interfaces/users.interfaces";
import { client } from "../../database";
import format from "pg-format";

const recoverUserService = async (
  userId: number
): Promise<TUserResponse> => {
  const queryString: string = 
    `
    UPDATE 
      users
    SET
       active=true
    WHERE
     id=$1
     RETURNING 
     "id","name","email","admin","active"

            
            `
  
  const queryConfig: QueryConfig = {
    text: queryString,
    values: [userId],
  };
  const queryResult: QueryResult<TUserResponse> = await client.query(
    queryConfig
  );
return queryResult.rows[0]
  
};
export default recoverUserService;
