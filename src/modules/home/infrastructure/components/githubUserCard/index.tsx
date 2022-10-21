import React from "react";
import GithubUser from "../../../../../shared/dto/github/user";
import './index.css'

export default function GithubUserCard(props: any) {
    const githubUser: GithubUser = props.githubUser
    return (
            <div className="container__user">
               <div className="innerContainer__user">
                   <img src={githubUser.avatar_url} className="innerContainer__user--avatar" alt={githubUser.login}/>
                   <strong className="innerContainer__user--name">{githubUser.login}</strong>
               </div>
            </div>
    )
}
