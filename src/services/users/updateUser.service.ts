import { QueryConfig, QueryResult } from "pg";
import { TUserRequest, TUserResponse, TUserUpdateRequest } from "../../interfaces/users.interfaces";
import { client } from "../../database";
import format from "pg-format";

const updateUserService= async( 
    userId:number, 
    userData:TUserUpdateRequest
    ):Promise<TUserResponse> =>{
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