import {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../../../shared/store";
import {userDetailServices} from "../../services/userDetail.services";
import {UserDetail} from "../../../../shared/dto/github/userDetail";

export default function useUserDetail() {
    const [infoUser, setInfoUser] = useState<UserDetail>()
    const { name } = useParams();
    const userGithub = useSelector((state: RootState) => state.user.info)

    async function getDetail() {
        const response = await userDetailServices.getByName(name as string)
        setInfoUser(response as UserDetail)
    }
    const getUserInfo = useCallback(getDetail, [name])
    useEffect(() => {
        if (!userGithub){
            getUserInfo().catch()
        }
    }, [getUserInfo, userGithub])
    return {
        userGithub,
        infoUser
    }
}
