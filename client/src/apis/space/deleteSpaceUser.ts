import { axiosInstance } from '@apis/AxiosInstance';
import { ApiResponseType } from '@type/response.type';
import { END_POINTS } from '@constants/api';

export const deleteSpaceUser = async (spaceId: number, userId: number) => {
  const { data } = await axiosInstance.post<ApiResponseType>(
    END_POINTS.SPACE_USER(spaceId),
    { userId }
  );

  return data;
};
