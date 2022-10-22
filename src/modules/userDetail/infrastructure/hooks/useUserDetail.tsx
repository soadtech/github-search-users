import React from "react";
import {useSearchParams} from "react-router-dom";

export default function useUserDetail() {
    const [searchParams] = useSearchParams();
    const tab = searchParams.get('tab')
    console.log(tab)
    return {

    }
}
