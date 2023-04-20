const deleteUser = async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    const { id: developerId } = request.params;
    const queryString: string = `
      DELETE FROM
          developers
      WHERE
          "id"=$1
  
      `;
    const queryConfig: QueryConfig = {
      text: queryString,
      values: [developerId],
    };
    await client.query(queryConfig);
  
    return response.status(204).send();
  };