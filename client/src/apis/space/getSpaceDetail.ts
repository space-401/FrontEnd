import {END_POINTS} from '@constants/api';
import {axiosInstance} from '@apis/AxiosInstance';
import {SpaceInfo} from "@type/space.type";

export const getSpaceDetail = async (spaceId: string) => {
    const {data} = await axiosInstance.get<SpaceInfo>(
        END_POINTS.SPACE_INFO(spaceId)
    );
    return data;
};
