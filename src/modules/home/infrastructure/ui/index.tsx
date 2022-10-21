import React from "react";
import SearchBox from "../../../../shared/components/searchBox";
import useHome from "../hooks/useHome";
import './index.css'
import GithubUser from "../../../../shared/dto/github/user";

export default function Home() {
    const {githubUsers, query, loading, handlerChange} = useHome()
    return (
        <div className="container-home">
            <h1 className="text-white">Hi, i'm Home</h1>
            <SearchBox loading={loading} value={query} handlerChange={handlerChange} placeholder="Search a user" />

            {githubUsers.map((githubUser: GithubUser) => (
                    <div key={githubUser.id} className="container-result">
                        <img src={githubUser.avatar_url} style={{width: 50, height: 50, borderRadius: 150}}/>
                        <span>{githubUser.login}</span>
                    </div>
            ))}
        </div>
    )
}
