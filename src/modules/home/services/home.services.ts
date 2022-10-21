import {homeRepository} from "../repositories/home.repository";
import GithubUser from "../../../shared/dto/github/user";

export const homeServices = {
    getByName: async (name: string): Promise<GithubUser[]> => {
        const {response, error} = await homeRepository.getByName(name)
        if (error) return []
        return response.items
    }
}