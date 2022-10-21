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
            <div className="container-result">

                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="image profile" style={{width: 50, height: 50, borderRadius: 150}}/>
                    <span>Fernando Ropero</span>
            </div>
        </div>
    )
}
