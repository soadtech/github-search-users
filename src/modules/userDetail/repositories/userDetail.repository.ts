import http from "../../../shared/libs/http";
import {baseUrl} from "../../../shared/config";
import {UserDetail} from "../../../shared/dto/github/userDetail";

export const userDetailRepository = {
    getByName: async (name: string) => {
        return await http.get<UserDetail>(`${baseUrl}/users/${name}`)
    }
}
