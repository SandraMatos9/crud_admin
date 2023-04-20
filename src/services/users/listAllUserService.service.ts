import { QueryResult } from "pg";
import { TuserResponse } from "../../interfaces/users.interfaces";
import { client } from "../../database";

const listAllUserService = async():Promise<Array<TuserResponse>> =>{
    const queryString:string = 
    `
    SELECT
        "id",
        "name",
        "email",
        "admin",
        "active"
    FROM
        users;
    `;

    const queryResult:QueryResult<TuserResponse> = await client.query(
        queryString
    );
    return queryResult.rows;

};
export default listAllUserService