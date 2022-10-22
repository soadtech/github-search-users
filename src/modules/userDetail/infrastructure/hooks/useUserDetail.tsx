import {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../../shared/store";
import {userDetailServices} from "../../services/userDetail.services";
import {UserDetail} from "../../../../shared/dto/github/userDetail";
import GithubRepository from "../../../../shared/dto/github/repository";
import {GithubOrganization} from "../../../../shared/dto/github/organization";

export default function useUserDetail() {
    const [infoUser, setInfoUser] = useState<UserDetail>()
    const [loading, setLoading] = useState(false)
    const [repositories, setRepositories] = useState<GithubRepository[]>()
    const [organizations, setOrganizations] = useState<GithubOrganization[]>()
    const { name } = useParams();
    const userGithub = useSelector((state: RootState) => state.user.info)

    async function getAllDetails() {
        setLoading(true)
        await getRepositories()
        await getOrganizations()
        setLoading(false)
    }
    async function getDetail() {
        const response = await userDetailServices.getByName(name as string)
        setInfoUser(response as UserDetail)
    }
    async function getRepositories() {
        const response = await userDetailServices.getRepositories(name as string)
        setRepositories(response)
    }
    async function getOrganizations() {
        const response = await userDetailServices.getOrganizations(name as string)
        setOrganizations(response)
    }
    const getUserInfo = useCallback(getDetail, [name])
    useEffect(() => {
        if (!userGithub){
            getUserInfo().catch(() =>  setLoading(false))
        }
    }, [getUserInfo, userGithub])

    useEffect(() => {
        getAllDetails().catch()
    }, [])
    return {
        loading,
        userGithub,
        infoUser,
        repositories,
        organizations
    }
}
