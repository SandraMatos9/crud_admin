import { TUser,TuserResponse } from "../../interfaces/users.interfaces";
import { responseUserSchema } from "../../schemas/users.schemas";

const idUserService = async (user:TUser):Promise<TuserResponse> =>{
    const userResponse = responseUserSchema.parse(user)
    return userResponse
}
export default idUserService

