import {axiosInstance} from "@apis/AxiosInstance";
import {ApiResponseType} from "@type/response.type";
import {END_POINTS} from "@constants/api";

export const deleteSpaceTag = async (spaceId: number, tagId: number) => {
    const {data} = await axiosInstance.post<ApiResponseType>(
        END_POINTS.SPACE_TAG(spaceId), {tagId}
    );

    return data;
};