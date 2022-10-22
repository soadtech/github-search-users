import http from "../../../shared/libs/http";
import {baseUrl} from "../../../shared/config";
import {UserDetail} from "../../../shared/dto/github/userDetail";
import GithubRepository from "../../../shared/dto/github/repository";
import {GithubOrganization} from "../../../shared/dto/github/organization";

export const userDetailRepository = {
    getByName: async (name: string) => {
        return await http.get<UserDetail>(`${baseUrl}/users/${name}`)
    },
    getRepositories: async (username: string) => {
        return await http.get<GithubRepository[]>(`${baseUrl}/users/${username}/repos`)
    },
    getOrganizations: async (username: string) => {
        return await http.get<GithubOrganization[]>(`${baseUrl}/users/${username}/orgs`)
    }
}
