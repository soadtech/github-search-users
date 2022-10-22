import React from "react";
import GithubUser from "../../../../../shared/dto/github/user";
import { useNavigate, useSearchParams } from 'react-router-dom';
import './index.css'

export default function GithubUserCard(props: any) {
    const navigate = useNavigate()
    const githubUser: GithubUser = props.githubUser
    function goToDetail() {
        navigate(`/userDetail/${githubUser.login}?tab=repositories`)
    }
    return (
            <div onClick={goToDetail} className="container__user">
               <div className="innerContainer__user">
                   <img src={githubUser.avatar_url} className="innerContainer__user--avatar" alt={githubUser.login}/>
                   <strong className="innerContainer__user--name">{githubUser.login}</strong>
               </div>
            </div>
    )
}
