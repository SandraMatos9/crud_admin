import format from 'pg-format'
import { TUserRequest, TUserResponse } from '../../interfaces/users.interfaces'
import { QueryResult } from 'pg'

import { hash } from "bcryptjs";
import { responseUserSchema } from '../../schemas/users.schemas';
import { client } from '../../database';

const createUsersService = async (
    userData: TUserRequest
    ): Promise<TUserResponse> => {
  const queryString:string=format(
    ` 
    INSERT INTO
    users(%I)
    VALUES
    (%L)
    RETURNING 
    "id","name","email";
    `,
    Object.keys(userData),
    Object.values(userData)
  )
  const queryResult:QueryResult<TUserResponse> = await client.query(
    queryString
  )
  const newUser = responseUserSchema.parse(queryResult.rows[0])
  return newUser
  }
export default createUsersService;
