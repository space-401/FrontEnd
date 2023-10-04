import {axiosInstance} from '@apis/AxiosInstance';
import {END_POINTS} from '@constants/api';
import {PostDetailType} from '@type/space.type';

export const getPostDetail = async (postId: number) => {
    const {data} = await axiosInstance.get<PostDetailType>(
        END_POINTS.POST, {data: {postId}}
    );

    return data;
};
