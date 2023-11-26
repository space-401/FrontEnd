//완성
import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';

export const deleteSpaceUser = async (spaceId: number, userId: number) => {
  const { data } = await axiosInstance.delete<ApiResponseType>(
    END_POINTS.SPACE_USER,
    { params: { spaceId, userId } }
  );

  return data;
};
