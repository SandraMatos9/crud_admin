import { QueryResult } from "pg";
import { AppError } from "../../error";
import { client } from "../../database";
import { TUser } from "../../interfaces/users.interfaces";
import format from "pg-format";
import {
  TLoginRequest,
  TLoginResponse,
} from "../../interfaces/login.interfaces";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createLoginUser = async (
  payload: TLoginRequest
): Promise<TLoginResponse> => {
  const queryString: string = `
    SELECT
        *
    FROM
        users
    WHERE
        email=%L;
        
    `;
  const queryFormat: string = format(queryString, payload.email);
  const queryResult: QueryResult<TUser> = await client.query(queryFormat);
  const user = queryResult.rows[0];

  if (queryResult.rowCount === 0) {
    throw new AppError("Wrong email/password", 401);
    queryResult.rowCount === 0 || queryResult.rows[0].active === false;
  }

  const comparePassword: boolean = await bcrypt.compare(
    payload.password,
    user.password
  );

  if (comparePassword === false) {
    throw new AppError("Wrong email/password", 401);
  }

  const token: string = jwt.sign(
    {
      email: user.email,
      admin: user.admin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "1d",
      subject: user.id.toString(),
    }
  );

  return { token: token };
};

export { createLoginUser };
