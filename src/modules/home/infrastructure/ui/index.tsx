import React from "react";
import SearchBox from "../../../../shared/components/searchBox";
import useHome from "../hooks/useHome";
import GithubUser from "../../../../shared/dto/github/user";
import GithubUserCard from "../components/githubUserCard";
import './index.css'

export default function Home() {
    const {githubUsers, query, loading, handlerChange} = useHome()
    return (
        <div className="container">
            <h1 className="text-white">Github search users</h1>
            <SearchBox loading={loading} value={query} handlerChange={handlerChange} placeholder="Search a user" />

            {githubUsers.map((githubUser: GithubUser) => (
                    <GithubUserCard key={githubUser.id} githubUser={githubUser}  />
            ))}
        </div>
    )
}
