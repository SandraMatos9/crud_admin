import { QueryConfig } from "pg";
import { client } from "../../database";
import { Request,Response } from "express";


const deleteUser = async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const userId:number=parseInt(request.params.id)

    const queryString: string = `
      DELETE FROM
          developers
      WHERE
          "id"=$1
  
      `;
    const queryConfig: QueryConfig = {
      text: queryString,
      values: [userId],
    };
    await client.query(queryConfig);
  
    return response.status(204).send();
  };