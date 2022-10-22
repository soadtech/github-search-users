import React from "react";
import useUserDetail from "../hooks/useUserDetail";

export default function UserDetail() {
    useUserDetail()
    return (
        <div>
            <h1>Hi, i'm UserDetail</h1>
        </div>
    )
}
