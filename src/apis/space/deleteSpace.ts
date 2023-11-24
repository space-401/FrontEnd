// 수정 완료

import { axiosInstance } from '@apis/AxiosInstance';
import { ApiResponseType } from '@type/response.type';
import { END_POINTS } from '@constants/api';

export const deleteSpace = async (spaceId: string) => {
  const { data } = await axiosInstance.delete<ApiResponseType>(
    END_POINTS.SPACE,
    { params: { spaceId } }
  );
  return data;
};
