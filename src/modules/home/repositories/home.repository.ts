import http from '../../../shared/libs/http'
import {baseUrl} from "../../../shared/config";
import ResponseGithubSearchUsers from "../../../shared/dto/github/response";

export const homeRepository = {
    getByName: async (name: string) => {
      return await http.get<ResponseGithubSearchUsers>(`${baseUrl}/search/users?q=${name}`)
    }
}