import {TypeOf, z} from 'zod'
import { requestUserSchema, responseUserSchema, userSchema,userSchemaUpdate } from '../schemas/users.schemas'

type TUser = z.infer <typeof userSchema>
type TUserRequest =  z.infer<typeof requestUserSchema>
type TUserResponse = z.infer<typeof responseUserSchema>
type TUserUpdateRequest= z.infer<typeof userSchemaUpdate>
export{TUserResponse,TUserRequest,TUser,TUserUpdateRequest}