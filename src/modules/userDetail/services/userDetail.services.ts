import {userDetailRepository} from "../repositories/userDetail.repository";
import {UserDetail} from "../../../shared/dto/github/userDetail";
import GithubRepository from "../../../shared/dto/github/repository";
import {GithubOrganization} from "../../../shared/dto/github/organization";

export const userDetailServices = {
    getByName: async (name: string): Promise<UserDetail | null> => {
        const {response, error} = await userDetailRepository.getByName(name)
        if (error) return null
        return response
    },
    getRepositories: async (name: string): Promise<GithubRepository[]> => {
        const {response, error} = await userDetailRepository.getRepositories(name)
        if (error) return []
        return response
    },
    getOrganizations: async (name: string): Promise<GithubOrganization[]> => {
        const {response, error} = await userDetailRepository.getOrganizations(name)
        if (error) return []
        return response
    }
}
