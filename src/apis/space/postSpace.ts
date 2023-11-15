import { formDataAxiosInstance } from '@apis/AxiosInstance';
import { ApiResponseType } from '@type/response.type';
import { END_POINTS } from '@constants/api';

export const postNewSpace = async (spaceInfo: FormData) => {
  const response = await formDataAxiosInstance.post<ApiResponseType>(
    END_POINTS.SPACE,
    {
      ...spaceInfo,
    }
  );
  return response.data;
};
