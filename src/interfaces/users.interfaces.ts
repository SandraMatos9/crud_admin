import { TypeOf, z } from "zod";
import {
  requestUserSchema,
  responseUserSchema,
  userSchema,
  userSchemaPostUser,
  userSchemaUpdate,
} from "../schemas/users.schemas";
import { type } from "os";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof requestUserSchema>;
type TUserResponse = z.infer<typeof responseUserSchema>;
type TUserUpdateRequest = z.infer<typeof userSchemaUpdate>;
type TUserPostUserRequest= z.infer<typeof userSchemaPostUser>
type TUserPostUserResponse= z.infer<typeof userSchemaPostUser>


export { TUserResponse, TUserRequest, TUser, TUserUpdateRequest,TUserPostUserRequest,TUserPostUserResponse };
