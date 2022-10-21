import React from "react";
import './index.css'

interface LoaderProps {
    size: number
}

export default function Loader({size}: LoaderProps) {
    return (
        <div id="loader">
            <div style={{ top: size + 8, width: size + 2 }} id="shadow" />
            <div style={{ width: size, height: size }} id="box" />
        </div>
    )
}
