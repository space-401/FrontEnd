import Loading from '@pages/Loading';
import tokenStorage from '@utils/tokenStorage';
import {useNavigate, useParams} from 'react-router-dom';
import {PATH} from '@constants/path';
import {SocialType} from '@type/user.type';
import {useUserStore} from '@store/user';
import {useLoginQuery} from "@hooks/api/user/useLoginQuery";
import {useEffect} from "react";

const Auth = () => {
    const navigate = useNavigate();
    const params = useParams();
    const socialType = params.socialType as SocialType;
    const setUserInfo = useUserStore(state => state.setUserInfo);

    const code = new URL(window.location.href).searchParams.get('code')!;
    const state = new URL(window.location.href).searchParams.get('state')!;

    const {LoginResponse, isSuccess} = useLoginQuery({code, socialType, state: Boolean(state)})

    useEffect(()=>{
        if (isSuccess) {
            const {accessToken, refreshToken} = LoginResponse!.user
            tokenStorage.setAccessToken(accessToken, 30);
            tokenStorage.setRefreshToken(refreshToken, 60 * 24 * 14);
            setUserInfo(LoginResponse!.user)
            navigate(PATH.SPACE);
        }
    },[isSuccess])

    return <Loading/>;
};

export default Auth;
