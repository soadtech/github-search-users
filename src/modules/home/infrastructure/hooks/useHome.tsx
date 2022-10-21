import {useCallback, ChangeEvent, useState} from "react";
import {debounce} from "../../../../shared/utils";

export default function useHome() {
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)

    function getUsersByQuery(value: string) {
        console.log('value ', value)
            setLoading(false)
    }

    const handleDebounce = useCallback(debounce(async function (textValue: string) {
        getUsersByQuery(textValue)
    }, 3000, false), [])
    function handlerChange(event: ChangeEvent<HTMLInputElement>) {
        setLoading(true)
        const {value} = event.target
        // @ts-ignore
        handleDebounce(value)
        setQuery(value)
    }
    return {
        query,
        loading,
        handlerChange
    }
}
