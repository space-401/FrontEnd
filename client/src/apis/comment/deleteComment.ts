import {END_POINTS} from '@constants/api';
import {axiosInstance} from '@apis/AxiosInstance';
import type {ApiResponseType} from "@type/response.type";

export const deleteComment = async (postId: string) => {
    const {data} = await axiosInstance.delete<ApiResponseType>(
        END_POINTS.COMMENT, {data: {postId}}
    );

    return data;
};
