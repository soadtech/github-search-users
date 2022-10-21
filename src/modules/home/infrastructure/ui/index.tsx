import React from "react";
import SearchBox from "../../../../shared/components/searchBox";
import useHome from "../hooks/useHome";
import './index.css'

export default function Home() {
    const {query, loading, handlerChange} = useHome()
    return (
        <div className="container-home">
            <h1 className="text-white">Hi, i'm Home</h1>
            <SearchBox loading={loading} value={query} handlerChange={handlerChange} placeholder="Search a user" />
        </div>
    )
}
