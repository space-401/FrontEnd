//완성

import { axiosInstance } from '@/apis';
import type { ApiResponseType } from '@/types';
import { END_POINTS } from '@/constants';

export const deleteSpaceUser = async (spaceId: number, userId: number) => {
  const { data } = await axiosInstance.delete<ApiResponseType>(
    END_POINTS.SPACE_USER,
    { params: { spaceId, userId } }
  );

  return data;
};
