import {TypeOf, z} from 'zod'
import { requestUserSchema, responseUserSchema, userSchema } from '../schemas/users.schemas'

type TUser = z.infer <typeof userSchema>
type TUserRequest = z.infer<typeof requestUserSchema>
type TuserResponse = z.infer<typeof responseUserSchema>

export{TuserResponse,TUserRequest,TUser}