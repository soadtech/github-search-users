import {homeRepository} from "../repositories/home.repository";
import GithubUser from "../../../shared/dto/github/user";

export const homeServices = {
    getGithubUsersByName: async (name: string): Promise<GithubUser[]> => {
        const {response, error} = await homeRepository.getGithubUsersByName(name)
        if (error) return []
        return response.items
    }
}
