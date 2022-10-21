import React from "react";
import SearchBox from "../../../../shared/components/searchBox";
import useHome from "../hooks/useHome";

export default function Home() {
    const {query, handlerChange} = useHome()
    return (
        <div>
            <h1 className="text-white">Hi, i'm Home</h1>
            <SearchBox value={query} handlerChange={handlerChange} placeholder="Search a user" />
        </div>
    )
}
