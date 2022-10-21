import {ChangeEvent, useState} from "react";

export default function useHome() {
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    function handlerChange(event: ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setQuery(value)
    }
    return {
        query,
        loading,
        handlerChange
    }
}
