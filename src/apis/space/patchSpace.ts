import { axiosInstance } from '@apis/AxiosInstance';
import { ApiResponseType } from '@type/response.type';
import { END_POINTS } from '@constants/api';

export const patchSpace = async (spaceInfo: FormData) => {
  const { data } = await axiosInstance.patch<ApiResponseType>(
    END_POINTS.SPACE,
    spaceInfo,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return data;
};
