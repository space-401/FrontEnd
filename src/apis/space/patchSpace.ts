// 수정 완료

import { formDataAxiosInstance } from '@apis/AxiosInstance';
import { ApiResponseType } from '@type/response.type';
import { END_POINTS } from '@constants/api';

export const patchSpace = async (spaceInfo: FormData) => {
  const { data } = await formDataAxiosInstance.post<ApiResponseType>(
    END_POINTS.SPACE,
    {
      ...spaceInfo,
    }
  );
  return data;
};
