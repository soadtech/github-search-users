import React from "react";
import GithubUser from "../../../../../shared/dto/github/user";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setUserAction} from "../../../../../shared/store/slices/userSlice";
import './index.css'

export default function GithubUserCard(props: any) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const githubUser: GithubUser = props.githubUser
    function goToDetail() {
        dispatch(setUserAction(githubUser))
        navigate(`/userDetail/${githubUser.login}`)
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
