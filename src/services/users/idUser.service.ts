import { TUser,TUserResponse } from "../../interfaces/users.interfaces";
import { responseUserSchema } from "../../schemas/users.schemas";

const idUserService = async (user:TUser):Promise<TUserResponse> =>{
    const userResponse = responseUserSchema.parse(user)
    return userResponse
}
export default idUserService

