//완성

import { axiosInstance } from '@apis/AxiosInstance';
import { ApiResponseType } from '@type/response.type';
import { END_POINTS } from '@constants/api';

export const deleteSpaceUser = async (spaceId: number, userId: number) => {
  const { data } = await axiosInstance.delete<ApiResponseType>(
    END_POINTS.SPACE_USER,
    { params: { spaceId, userId } }
  );

  return data;
};
