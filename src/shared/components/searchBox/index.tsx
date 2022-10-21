import React, {ChangeEvent} from "react";
import './index.css'

interface SearchBoxProps {
    value: string
    handlerChange: (event: ChangeEvent<HTMLInputElement>) => void
    placeholder: string
}

export default function SearchBox({value, handlerChange, placeholder}: SearchBoxProps) {
    return (
        <input className="search-box" value={value} onChange={handlerChange} placeholder={placeholder} />
    )
}
