// 수정 완료
import { axiosInstance } from '@/apis';
import { END_POINTS } from '@/constants';
import type { ApiResponseType } from '@/types';

export const deleteSpace = async (spaceId: string) => {
  console.log('spaceId', spaceId);
  const { data } = await axiosInstance.delete<ApiResponseType>(
    `${END_POINTS.SPACE}?spaceId=${spaceId}`
  );
  return data;
};
