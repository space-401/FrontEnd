import { axiosInstance } from '@apis/AxiosInstance';
import { ApiResponseType } from '@type/response.type';
import { END_POINTS } from '@constants/api';

export const deleteSpace = async (spaceId: number) => {
  const { data } = await axiosInstance.post<ApiResponseType>(
    END_POINTS.SPACE_INFO(spaceId)
  );

  return data;
};
