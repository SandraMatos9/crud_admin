import { QueryConfig, QueryResult } from "pg";
import {
  TUserRequest,
  TUserResponse,
  TUserUpdateRequest,
} from "../../interfaces/users.interfaces";
import { client } from "../../database";
import format from "pg-format";

const deleteUserService = async (
  userId: number
): Promise<void> => {
  const queryString: string = 
    `
    UPDATE 
      users
    SET
       active=false
    WHERE
     id=$1;

            
            `
  
  const queryConfig: QueryConfig = {
    text: queryString,
    values: [userId],
  };
  const queryResult: QueryResult<TUserResponse> = await client.query(
    queryConfig
  );

  
};
export default deleteUserService;
