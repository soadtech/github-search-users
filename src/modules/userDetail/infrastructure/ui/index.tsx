import React from "react";
import useUserDetail from "../hooks/useUserDetail";
import GithubUser from "../../../../shared/dto/github/user";
import {UserDetail} from "../../../../shared/dto/github/userDetail";

export default function UserDetails() {
    const {userGithub, infoUser} = useUserDetail()
    const user: GithubUser | UserDetail | undefined = userGithub ? userGithub as unknown as GithubUser: infoUser
    return (
        <div>
            <img alt={user?.login} src={user?.avatar_url} />
            <h1>Hi, i'm UserDetail</h1>
        </div>
    )
}
