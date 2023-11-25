import { axiosInstance } from '@apis/AxiosInstance';
import { SpaceFormResponse } from '@type/response.type';
import { END_POINTS } from '@constants/api';

export const postNewSpace = async (spaceInfo: FormData) => {
  const response = await axiosInstance.post<SpaceFormResponse>(
    END_POINTS.SPACE,
    spaceInfo,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return response.data;
};
