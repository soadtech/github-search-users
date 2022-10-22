import {userDetailRepository} from "../repositories/userDetail.repository";
import {UserDetail} from "../../../shared/dto/github/userDetail";

export const userDetailServices = {
    getByName: async (name: string): Promise<UserDetail | null> => {
        const {response, error} = await userDetailRepository.getByName(name)
        if (error) return null
        return response
    }
}
