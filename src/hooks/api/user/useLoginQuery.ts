import {useQuery} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {getLogin, ILoginProps, ILoginResponse} from "@apis/user/getLogin";

export const useLoginQuery = (props: ILoginProps) => {
    const {state, code, socialType} = props
    const {data: LoginResponse, isSuccess} = useQuery<ILoginResponse, AxiosError>(
        [code, socialType],
        () => getLogin({code, socialType, state})
    );

    return {LoginResponse, isSuccess};
};
