import { QueryConfig, QueryResult } from "pg";
import { TUserRequest, TuserResponse } from "../../interfaces/users.interfaces";

const updateUserService= async( 
    userId:number, 
    userData:TUserUpdateRequest
    ):Promisse<TuserResponse> =>{
        const queryString:string = format(
            `
            UPDATE 
                users
                SET(%I) = ROW(%L)
            WHERE
                id=$1
            RETURNING
            "id","name","email","admin","active"

            
            `,
            Object.keys(userData),
            Object.values(userData)

        )

        const  queryConfig:QueryConfig ={
            text: queryString,
            values:[userId]
        }
        const queryResult:QueryResult<TUserResponse> = await client.query(
            queryConfig
        )

        return queryResult.rows[0]
    }
    export default updateUserService