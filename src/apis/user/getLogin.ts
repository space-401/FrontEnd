import {SocialType} from '@type/user.type';
import {axiosInstance} from '@apis/AxiosInstance';
import {PATH} from '@constants/path';
import {UserStateType} from '@store/user';

export interface ILoginResponse {
    user: UserStateType;
}

export interface ILoginProps {
    code: string;
    socialType: SocialType;
    state?: boolean;
}

export const getLogin = async (props: ILoginProps) => {
    const {state = false, socialType, code} = props;
    const response = await axiosInstance.get<ILoginResponse>(
        PATH.SOCIAL_LOGIN(socialType),
        {
            params: {
                code,
                state,
            },
            useAuth: false,
        }
    );
    return response.data;
};
