const createLoginUser= async(
    payload:TLoginRequest
):Promise<TLoginResponse> =>{
    const queryString:string = 
    `
    SELECT
    *
    FROM
        users
    WHERE
        email=%L;
    `;
    const queryFormat:string

}
