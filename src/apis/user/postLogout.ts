import { axiosInstance } from '@apis/AxiosInstance';
import { END_POINTS } from '@constants/api';
import { ApiResponseType } from '@type/response.type';
import tokenStorage from '@utils/tokenStorage';

export const postLogout = async () => {
  const { data } = await axiosInstance.post<ApiResponseType>(END_POINTS.LOGOUT);
  if (data.message === 'success') {
    tokenStorage.clear();
    return data;
  } else {
    throw new Error('로그아웃이 실패하였습니다.');
  }
};
