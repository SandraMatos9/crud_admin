import { QueryConfig, QueryResult } from "pg"
import { TUser, TUserResponse } from "../../interfaces/users.interfaces"
import { client } from "../../database"
import { requestAllUsersSchema } from "../../schemas/users.schemas"


const listUserService = async ():Promise<Array<TUserResponse>> =>{
    const queryString:string= `

    SELECT
       *
    FROM
        users;


    `

    const queryResult:QueryResult<TUser> = await client.query(queryString)
    const users:TUserResponse[]= requestAllUsersSchema.parse(queryResult.rows)


    return users
    

}
export default listUserService