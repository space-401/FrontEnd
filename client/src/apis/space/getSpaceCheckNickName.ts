import { axiosInstance } from '@apis/AxiosInstance';
import { ApiResponseType } from '@type/response.type';
import { END_POINTS } from '@constants/api';

export const getSpaceCheckNickName = async (
  spaceId: number,
  userName: string
) => {
  const { data } = await axiosInstance.get<ApiResponseType>(
    END_POINTS.SPACE_USER(spaceId) + '?userName=' + userName
  );

  return data;
};
