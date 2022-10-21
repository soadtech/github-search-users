import React, {ChangeEvent} from "react";
import './index.css'
import Loader from "../loader";

interface SearchBoxProps {
    value: string
    handlerChange: (event: ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    loading: boolean
}

export default function SearchBox({value, loading, handlerChange, placeholder}: SearchBoxProps) {
    return (
        <div className="container-input">
            <input className="search-box" value={value} onChange={handlerChange} placeholder={placeholder} />
            {loading && (
                <div className="container-loader">
                    <Loader size={20} />
                </div>
            )}
        </div>
    )
}
