// 수정 완료

import { axiosInstance } from '@apis/AxiosInstance';
import { ApiResponseType } from '@type/response.type';
import { END_POINTS } from '@constants/api';

export const patchSpace = async (props: FormData) => {
  const { data } = await axiosInstance.post<ApiResponseType>(
    END_POINTS.SPACE,
    props
  );
  return data;
};
