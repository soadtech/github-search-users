import {useCallback, ChangeEvent, useState} from "react";
import {debounce} from "../../../../shared/utils";
import {homeServices} from "../../services/home.services";
import GithubUser from "../../../../shared/dto/github/user";

export default function useHome() {
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [githubUsers, setGithubUsers] = useState<GithubUser[]>([])

    async function getUsersByQuery(value: string) {
        const githubUsers = await homeServices.getByName(value)
        setGithubUsers(githubUsers)
        setLoading(false)
    }

    const handleDebounce = useCallback(debounce(async function (textValue: string) {
        getUsersByQuery(textValue).catch(() => setLoading(false))
    }, 1000, false), [])
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
        githubUsers,
        handlerChange
    }
}
