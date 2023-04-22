import { QueryResult } from "pg";
import { TUserRequest, TUserResponse, TUserUpdateRequest } from "../../interfaces/users.interfaces";
import { responseUserSchema } from "../../schemas/users.schemas";
import { client } from "../../database";
import * as bcrypt from "bcryptjs";
import format from "pg-format";

const createUsersService = async(
    userData:TUserRequest
): Promise<TUserResponse> =>{

    userData.password = await bcrypt.hash(userData.password,10);

    const queryString:string = format(
       `
       INSERT INTO
        users(%I)
        VALUES
        (%L)
        RETURNING
        *;
       `,
       Object.keys(userData),
       Object.values(userData)
    );
    const queryResult:QueryResult<TUserUpdateRequest> = await client.query(queryString);
    const newUser = responseUserSchema.parse(queryResult.rows[0]);
    return newUser;


    

}
export default createUsersService