// 수정 완료

import { axiosInstance } from '@/apis';
import type { ApiResponseType } from '@/types';
import { END_POINTS } from '@/constants';

export const deleteSpace = async (spaceId: string) => {
  const { data } = await axiosInstance.delete<ApiResponseType>(
    END_POINTS.SPACE,
    { params: { spaceId } }
  );
  return data;
};
