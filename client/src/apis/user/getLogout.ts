import {axiosInstance} from "@apis/AxiosInstance";
import {END_POINTS} from "@constants/api";

export const getLogout = async () => {
    const { data } = await axiosInstance.get<boolean>(
        END_POINTS.LOGOUT
    );

    return data;
};
