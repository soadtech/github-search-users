import React from "react";
import useUserDetail from "../hooks/useUserDetail";
import GithubUser from "../../../../shared/dto/github/user";
import {UserDetail} from "../../../../shared/dto/github/userDetail";
import './index.css'
import Loader from "../../../../shared/components/loader";

export default function UserDetails() {
    const {loading, userGithub, repositories, organizations, infoUser} = useUserDetail()
    const user: GithubUser | UserDetail | undefined = userGithub ? userGithub as unknown as GithubUser: infoUser
    return (
        <div className="container__details">
            <div className="innerContainer">
                <img className="details__avatar" alt={user?.login} src={user?.avatar_url} />
                <h1 style={{marginLeft: 10}} className="text-white">{user?.login}</h1>
            </div>

            {loading ? (
                <div className="container__loader">
                    <Loader size={50} />
                </div>
            ) : (
                <div className="container__grid">
                    <div>
                        <h4 className="text-white">Repositorios</h4>

                        {repositories?.length === 0 && (
                            <span className="text-white">Sin repositorios</span>
                        )}
                        <div>
                            {repositories?.map((repository) => (
                                <div className="card__repository" key={repository.id}>
                                    <p>{repository.name}</p>
                                    <strong>Forks {repository.forks_count}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white">Organizaciones</h4>

                        {organizations?.length === 0 && (
                            <span className="text-white">Sin organizaciones</span>
                        )}
                        <div>
                            {organizations?.map((repository) => (
                                <div className="card__repository" key={repository.id}>
                                    <p>{repository.login}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
